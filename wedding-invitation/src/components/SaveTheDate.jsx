import React from 'react';
import { motion } from 'framer-motion';

export default function SaveTheDate() {
  const urlParams = new URLSearchParams(window.location.search);
  const isPutra = urlParams.get('v') === 'putra';

  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <motion.h2 
          className="text-4xl font-serif text-rosedeep mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Save The Date
        </motion.h2>

        <div className="space-y-12">
          {/* Akad */}
          <motion.div 
            className="p-8 bg-ivory rounded-3xl border border-gold-light shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-gold-deep mb-4">Akad Nikah</h3>
            <p className="text-lg font-medium">Minggu, 14 Juni 2026</p>
            <p className="text-ink-soft">Pukul 09.00 WIB</p>
            <div className="my-4 border-t border-gold-light/50 w-24 mx-auto"></div>
            <p className="font-semibold">Pondok Pesantren Daarurrahman</p>
            <p className="text-sm text-ink-soft">Purbalingga</p>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            className="p-8 bg-ivory rounded-3xl border border-gold-light shadow-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-gold-deep mb-4">Tasyakuran (Walimatun Nikah)</h3>
            <p className="text-lg font-medium">{isPutra ? "Sabtu, 20 Juni 2026" : "Jumat - Sabtu, 12-13 Juni 2026"}</p>
            <p className="text-ink-soft">Pukul 08.00 WIB s.d. selesai</p>
            <div className="my-4 border-t border-gold-light/50 w-24 mx-auto"></div>
            <p className="font-semibold">{isPutra ? "Kediaman Mempelai Pria" : "Pondok Pesantren Daarurrahman"}</p>
            <p className="text-sm text-ink-soft">{isPutra ? "Alamat Mempelai Pria" : "Purbalingga"}</p>
            
            <a 
              href={isPutra ? "https://maps.google.com" : "https://maps.google.com"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-sage text-ink rounded-full text-sm font-medium hover:bg-opacity-80 transition-colors"
            >
              Buka Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
