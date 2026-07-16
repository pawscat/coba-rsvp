import React from 'react';
import { motion } from 'framer-motion';

export default function WeddingGift() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Nomor rekening disalin!');
  };

  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          className="text-4xl font-serif text-rosedeep mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Wedding Gift
        </motion.h2>
        
        <p className="text-sm text-ink-soft mb-12">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>

        <div className="space-y-6">
          {/* BSI */}
          <motion.div 
            className="p-6 bg-ivory rounded-2xl border border-gold-light/50 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-2">Bank Syariah Indonesia (BSI)</h3>
            <p className="text-2xl font-mono tracking-wider mb-2">7313 752 806</p>
            <p className="text-sm text-ink-soft mb-4">a.n. Nida Lailiana Nur Hanifah</p>
            <button 
              onClick={() => handleCopy('7313752806')}
              className="px-4 py-2 border border-sage text-sage font-medium rounded-full hover:bg-sage hover:text-white transition-colors"
            >
              Salin Nomor Rekening
            </button>
          </motion.div>

          {/* BRI */}
          <motion.div 
            className="p-6 bg-ivory rounded-2xl border border-gold-light/50 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-2">Bank BRI</h3>
            <p className="text-2xl font-mono tracking-wider mb-2">3719 0103 4130 536</p>
            <p className="text-sm text-ink-soft mb-4">a.n. Ismaiel Khasan</p>
            <button 
              onClick={() => handleCopy('371901034130536')}
              className="px-4 py-2 border border-sage text-sage font-medium rounded-full hover:bg-sage hover:text-white transition-colors"
            >
              Salin Nomor Rekening
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
