import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

export default function GuestBook() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', attendance: 'Hadir', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const { data, error } = await supabase
      .from('guests')
      .insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          attendance_status: formData.attendance,
          message: formData.message,
        }
      ]);

    setIsSubmitting(false);

    if (error) {
      console.error('Error inserting RSVP:', error);
      setErrorMsg('Maaf, terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.');
    } else {
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', attendance: 'Hadir', message: '' });
    }
  };

  return (
    <section className="py-20 px-6 bg-ivory text-center">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          className="text-4xl font-serif text-rosedeep mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Buku Tamu
        </motion.h2>
        
        {isSuccess ? (
          <motion.div 
            className="bg-green-50 text-green-700 p-6 rounded-2xl shadow-sm text-center border border-green-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="font-serif text-2xl mb-2">Terima Kasih!</h3>
            <p>Konfirmasi kehadiranmu sudah kami terima. QR code akan dikirim ke email kamu jika kamu mengonfirmasi Hadir.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Kirim RSVP Lainnya
            </button>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-sm text-left border border-gold-light/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
                {errorMsg}
              </div>
            )}
            <div className="mb-4">
            <label className="block text-sm text-ink-soft mb-1">Nama</label>
            <input 
              type="text" 
              className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-rosedeep"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-ink-soft mb-1">No HP / WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-rosedeep"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-ink-soft mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-rosedeep"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
            <label className="block text-sm text-ink-soft mb-1">Kehadiran</label>
            <select 
              className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-rosedeep"
              value={formData.attendance}
              onChange={e => setFormData({...formData, attendance: e.target.value})}
            >
              <option value="Hadir">Hadir</option>
              <option value="Ragu">Ragu</option>
              <option value="Maaf">Maaf</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-ink-soft mb-1">Pesan & Doa</label>
            <textarea 
              className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-rosedeep"
              rows="4"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-rosedeep text-white py-3 rounded-xl font-medium shadow-md hover:bg-rose transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
