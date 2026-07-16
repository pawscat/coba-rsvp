import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-rosedeep text-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm italic mb-4">Sampai Jumpa</p>
        <p className="text-sm mb-12">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
        
        <p className="font-marck text-4xl" style={{ fontFamily: '"Marck Script", cursive' }}>
          Nida & Ismaiel
        </p>
      </motion.div>
    </footer>
  );
}
