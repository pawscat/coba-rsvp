import React from 'react';
import { motion } from 'framer-motion';

export default function QuranVerse() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-serif text-2xl text-gold-deep mb-6">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
        <p className="text-sm text-ink-soft italic leading-relaxed font-serif">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
        </p>
        <p className="mt-4 font-bold text-ink-soft">(QS. Ar-Rum: 21)</p>
      </motion.div>
    </section>
  );
}
