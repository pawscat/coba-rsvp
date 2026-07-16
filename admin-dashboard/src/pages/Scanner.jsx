import React, { useEffect, useState, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { supabase } from '../supabaseClient';
import { CheckCircle, AlertCircle, LogOut, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: { width: 250, height: 250 },
      fps: 5,
    });
    
    scannerRef.current = scanner;

    scanner.render(onScanSuccess, onScanError);

    return () => {
      scanner.clear().catch(console.error);
    };
  }, []);

  const onScanSuccess = async (decodedText) => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    // Pause scanner if possible or just ignore until processed
    scannerRef.current?.pause?.();

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("Not logged in");

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/check-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({ id: decodedText })
      });

      const result = await response.json();
      setScanResult({ ...result, status: response.status });

    } catch (error) {
      setScanResult({ error: error.message, status: 500 });
    }

    // Auto clear after 4 seconds
    setTimeout(() => {
      setScanResult(null);
      setIsProcessing(false);
      scannerRef.current?.resume?.();
    }, 4000);
  };

  const onScanError = (err) => {
    // ignore frequent errors
  };

  return (
    <div className="min-h-screen bg-ink text-white flex flex-col items-center">
      <header className="w-full p-4 flex justify-between items-center bg-ink-soft">
        <Link to="/dashboard" className="flex items-center gap-2 text-gold-light hover:text-white"><ArrowLeft size={20}/> Back</Link>
        <h1 className="font-serif text-xl">QR Check-in</h1>
        <button onClick={() => supabase.auth.signOut()} className="text-red-400"><LogOut size={20} /></button>
      </header>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center p-4">
        
        {scanResult ? (
          <div className={`w-full p-6 rounded-2xl text-center mb-8 ${scanResult.status === 200 && !scanResult.warning ? 'bg-green-600' : scanResult.warning ? 'bg-yellow-500' : 'bg-red-600'}`}>
            {scanResult.status === 200 && !scanResult.warning && (
              <>
                <CheckCircle size={48} className="mx-auto mb-4 text-white" />
                <h2 className="text-2xl font-bold">{scanResult.guest?.name}</h2>
                <p className="mt-2 text-green-100">Berhasil Check-in!</p>
              </>
            )}
            {scanResult.warning && (
              <>
                <AlertCircle size={48} className="mx-auto mb-4 text-white" />
                <h2 className="text-2xl font-bold">{scanResult.guest?.name}</h2>
                <p className="mt-2 font-semibold text-yellow-100">{scanResult.warning}</p>
              </>
            )}
            {scanResult.error && (
              <>
                <AlertCircle size={48} className="mx-auto mb-4 text-white" />
                <h2 className="text-2xl font-bold">Gagal</h2>
                <p className="mt-2 text-red-100">{scanResult.error}</p>
              </>
            )}
          </div>
        ) : (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-gold-light mb-2">Arahkan Kamera ke QR</h2>
            <p className="text-gray-400 text-sm">Pastikan QR code berada di dalam kotak</p>
          </div>
        )}

        <div className="w-full bg-white rounded-2xl overflow-hidden p-2">
          <div id="reader" className="w-full"></div>
        </div>

      </div>
    </div>
  );
}
