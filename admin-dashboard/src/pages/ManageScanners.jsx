import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserPlus, Trash2 } from 'lucide-react';

export default function ManageScanners() {
  const [scanners, setScanners] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchScanners();
  }, []);

  const fetchScanners = async () => {
    const { data } = await supabase.from('user_profiles').select('*').eq('role', 'scanner');
    if (data) setScanners(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    // WARNING: In a real app, you shouldn't use signUp on the client side if you want to bypass email confirmation 
    // without the user logging out. Usually, an Edge Function with Service Role Key is used to create users.
    // For simplicity in this demo, we'll assume the admin uses an Edge Function.
    // We will just show a mock success message here for the sake of the UI structure,
    // as creating users securely requires the service role key which we don't expose here.
    
    setMsg('Untuk membuat user scanner, Anda perlu endpoint backend (Edge Function) yang menggunakan service_role_key.');
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-8">
          <Link to="/dashboard" className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"><ArrowLeft size={20}/></Link>
          <h1 className="text-2xl font-serif text-rosedeep">Manage Scanner Accounts</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gold-light/30 h-fit">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2"><UserPlus size={18}/> Tambah Scanner</h2>
            {msg && <div className="mb-4 text-sm p-3 bg-blue-50 text-blue-700 rounded-lg">{msg}</div>}
            <form onSubmit={handleAdd}>
              <div className="mb-4">
                <label className="block text-sm text-ink-soft mb-1">Nama Lengkap</label>
                <input type="text" className="w-full border p-2 rounded-lg" value={fullName} onChange={e=>setFullName(e.target.value)} required/>
              </div>
              <div className="mb-4">
                <label className="block text-sm text-ink-soft mb-1">Email</label>
                <input type="email" className="w-full border p-2 rounded-lg" value={email} onChange={e=>setEmail(e.target.value)} required/>
              </div>
              <div className="mb-6">
                <label className="block text-sm text-ink-soft mb-1">Password</label>
                <input type="password" className="w-full border p-2 rounded-lg" value={password} onChange={e=>setPassword(e.target.value)} required minLength={6}/>
              </div>
              <button disabled={loading} className="w-full bg-sage text-white py-2 rounded-lg font-medium">Buat Akun</button>
            </form>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gold-light/30 overflow-hidden">
             <div className="p-4 border-b border-gray-100">
               <h2 className="font-semibold text-lg">Daftar Akun Scanner</h2>
             </div>
             <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-sm text-ink-soft">
                    <th className="p-4">Nama</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {scanners.map(s => (
                    <tr key={s.id} className="border-t border-gray-100">
                      <td className="p-4 font-medium">{s.full_name || 'Tidak ada nama'}</td>
                      <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Scanner</span></td>
                      <td className="p-4"><button className="text-red-500 hover:text-red-700"><Trash2 size={18}/></button></td>
                    </tr>
                  ))}
                  {scanners.length === 0 && <tr><td colSpan="3" className="p-4 text-center text-ink-soft">Belum ada akun scanner.</td></tr>}
                </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  );
}
