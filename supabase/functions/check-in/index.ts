import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";
import { corsHeaders } from "../_shared/cors.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY");

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error("Missing auth token");
    }

    const supabase = createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
      global: { headers: { Authorization: authHeader } }
    });

    // 1. Get user making the request (must be scanner or admin)
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("Unauthorized");

    // 2. Get input payload (UUID of the guest)
    const { id } = await req.json();
    if (!id) throw new Error("Missing guest ID in request body");

    // 3. Lookup guest
    const { data: guest, error: guestError } = await supabase
      .from('guests')
      .select('*')
      .eq('id', id)
      .single();

    if (guestError || !guest) {
      return new Response(JSON.stringify({ error: "Guest not found" }), { 
        status: 404, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    // 4. Check if already checked in
    if (guest.checked_in) {
      return new Response(JSON.stringify({ 
        warning: `Sudah check-in sebelumnya pada ${new Date(guest.checked_in_at).toLocaleTimeString()}`, 
        guest 
      }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // 5. Update guest to checked in
    const { data: updatedGuest, error: updateError } = await supabase
      .from('guests')
      .update({ 
        checked_in: true, 
        checked_in_at: new Date().toISOString(), 
        checked_in_by: user.id 
      })
      .eq('id', id)
      .select()
      .single();

    if (updateError) throw updateError;

    // 6. Return success
    return new Response(JSON.stringify({ success: true, guest: updatedGuest }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
