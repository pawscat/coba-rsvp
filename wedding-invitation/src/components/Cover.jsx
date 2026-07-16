import React from 'react';
import { motion } from 'framer-motion';

export default function Cover({ guestName, onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory text-ink"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/og.png)' }}></div>
      <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gold-light shadow-xl mx-4">
        <p className="eyebrow mt-6 uppercase tracking-widest text-sm text-ink-soft">The Wedding Of</p>
        <motion.p
          className="title-script mt-2 text-5xl md:text-7xl text-rosedeep font-marck"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: '"Marck Script", cursive' }}
        >
          Nida & Ismaiel
        </motion.p>
        
        <p className="mt-4 font-serif text-lg">Minggu, 14 Juni 2026</p>
        
        <div className="mt-8">
          <p className="text-sm text-ink-soft mb-2">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="text-xl font-semibold">{guestName || 'Tamu Undangan'}</p>
        </div>

        <motion.button
          onClick={onOpen}
          className="mt-8 px-6 py-3 bg-rosedeep text-white rounded-full font-medium tracking-wide shadow-lg hover:bg-rose transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Undangan
        </motion.button>
      </div>
    </motion.section>
  );
}
