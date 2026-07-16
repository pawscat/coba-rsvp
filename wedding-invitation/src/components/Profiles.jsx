import React from 'react';
import { motion } from 'framer-motion';

export default function Profiles() {
  return (
    <section className="py-20 px-6 bg-ivory text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          className="text-4xl font-serif text-rosedeep mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Sang Mempelai
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Bride */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-40 h-40 rounded-full border-4 border-gold-light overflow-hidden mb-6 bg-rose/20">
               {/* placeholder image */}
            </div>
            <h3 className="text-3xl font-marck text-ink" style={{ fontFamily: '"Marck Script", cursive' }}>Nida Lailiana Nur Hanifah, S.H.</h3>
            <p className="mt-2 text-sm text-ink-soft">Putri dari Bapak KH. Ahmad Rokhani, S.A.P., Al-Hafidz & Ibu Nurchayati</p>
          </motion.div>

          {/* & */}
          <div className="text-5xl font-marck text-gold-deep" style={{ fontFamily: '"Marck Script", cursive' }}>&</div>

          {/* Groom */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-40 h-40 rounded-full border-4 border-gold-light overflow-hidden mb-6 bg-rose/20">
               {/* placeholder image */}
            </div>
            <h3 className="text-3xl font-marck text-ink" style={{ fontFamily: '"Marck Script", cursive' }}>Ismaiel Khasan, S.H., M.H.</h3>
            <p className="mt-2 text-sm text-ink-soft">Putra dari Bapak K. Sudar Maulana & Ibu Toyibah</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
