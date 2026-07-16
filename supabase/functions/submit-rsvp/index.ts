import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import QRCode from "npm:qrcode@1.5.3";
import { PDFDocument, rgb } from "npm:pdf-lib@1.17.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

serve(async (req) => {
  try {
    const payload = await req.json();
    
    // In Supabase Database Webhooks, the payload is in `record`
    const guest = payload.type === 'INSERT' ? payload.record : payload;

    if (!guest || !guest.id) {
      return new Response(JSON.stringify({ error: "Invalid payload" }), { status: 400 });
    }

    if (guest.attendance_status !== 'Hadir') {
      return new Response(JSON.stringify({ message: "Not attending, skip QR" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Generate QR Code
    const qrDataUrl = await QRCode.toDataURL(guest.id);
    const qrBase64 = qrDataUrl.split(',')[1];
    
    // Convert base64 to Uint8Array for pdf-lib
    const binaryString = atob(qrBase64);
    const qrImageBytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        qrImageBytes[i] = binaryString.charCodeAt(i);
    }

    // 2. Generate PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([400, 600]);
    
    const qrImage = await pdfDoc.embedPng(qrImageBytes);
    
    page.drawText(`Undangan untuk:`, { x: 50, y: 560, size: 16, color: rgb(0.2, 0.2, 0.2) });
    page.drawText(`${guest.name}`, { x: 50, y: 530, size: 24, color: rgb(0, 0, 0) });
    page.drawText(`Scan QR code di bawah ini pada saat kehadiran.`, { x: 50, y: 490, size: 12, color: rgb(0.4, 0.4, 0.4) });
    
    page.drawImage(qrImage, { x: 100, y: 250, width: 200, height: 200 });
    
    const pdfBytes = await pdfDoc.save();
    
    // Convert Uint8Array to base64
    let pdfBase64 = "";
    for (let i = 0; i < pdfBytes.length; i++) {
        pdfBase64 += String.fromCharCode(pdfBytes[i]);
    }
    pdfBase64 = btoa(pdfBase64);

    // 3. Send Email via Resend
    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "RSVP Pernikahan <onboarding@resend.dev>",
          to: guest.email,
          subject: "Tiket Undangan Pernikahan Nida & Ismaiel",
          html: `<p>Halo ${guest.name},</p><p>Terima kasih atas konfirmasinya. Terlampir tiket QR code Anda untuk check-in pada hari acara.</p>`,
          attachments: [
            {
              filename: "tiket-undangan.pdf",
              content: pdfBase64
            }
          ]
        })
      });

      if (!emailRes.ok) {
        const errorText = await emailRes.text();
        console.error("Resend API Error:", errorText);
        throw new Error("Failed to send email");
      }
    } else {
      console.log("No RESEND_API_KEY found, skipping email.");
    }

    // 4. Update qr_sent = true
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    await supabase.from('guests').update({ qr_sent: true }).eq('id', guest.id);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
