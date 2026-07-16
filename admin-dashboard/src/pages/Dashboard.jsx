import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { LogOut, Users, CheckCircle, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';

export default function Dashboard() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetchGuests();

    const channel = supabase
      .channel('guests_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'guests' }, payload => {
        fetchGuests(); // Re-fetch on any change for simplicity
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  const fetchGuests = async () => {
    const { data } = await supabase.from('guests').select('*').order('created_at', { ascending: false });
    if (data) setGuests(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(guests.map(g => ({
      Nama: g.name,
      No_HP: g.phone,
      Email: g.email,
      Kehadiran: g.attendance_status,
      Pesan: g.message,
      QR_Terkirim: g.qr_sent ? 'Ya' : 'Tidak',
      Check_In: g.checked_in ? 'Sudah' : 'Belum',
      Waktu_Check_In: g.checked_in_at ? new Date(g.checked_in_at).toLocaleString() : '-'
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Guests");
    XLSX.writeFile(wb, "GuestList.xlsx");
  };

  const stats = {
    total: guests.length,
    hadir: guests.filter(g => g.attendance_status === 'Hadir').length,
    ragu: guests.filter(g => g.attendance_status === 'Ragu').length,
    maaf: guests.filter(g => g.attendance_status === 'Maaf').length,
    checkedIn: guests.filter(g => g.checked_in).length
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gold-light/30">
          <h1 className="text-2xl font-serif text-rosedeep">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link to="/manage-scanners" className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50">Manage Scanners</Link>
            <Link to="/scanner" className="px-4 py-2 text-sm font-medium border border-sage text-sage rounded-lg hover:bg-sage hover:text-white">Scanner Mode</Link>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-700">
              <LogOut size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-light/30">
            <div className="flex items-center gap-3 text-ink-soft mb-2"><Users size={20} /> Total RSVP</div>
            <div className="text-4xl font-semibold">{stats.total}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-light/30">
            <div className="flex items-center gap-3 text-green-600 mb-2"><CheckCircle size={20} /> Konfirmasi Hadir</div>
            <div className="text-4xl font-semibold text-green-700">{stats.hadir}</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold-light/30">
            <div className="flex items-center gap-3 text-yellow-600 mb-2"><Clock size={20} /> Ragu / Maaf</div>
            <div className="text-4xl font-semibold text-yellow-700">{stats.ragu} / {stats.maaf}</div>
          </div>
          <div className="bg-sage p-6 rounded-2xl shadow-sm text-white">
            <div className="flex items-center gap-3 mb-2"><CheckCircle size={20} /> Sudah Check-in</div>
            <div className="text-4xl font-semibold">{stats.checkedIn}</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gold-light/30 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Daftar Tamu</h2>
            <button onClick={handleExport} className="flex items-center gap-2 text-sm bg-sky text-skydeep px-4 py-2 rounded-lg font-medium hover:bg-opacity-80">
              <Download size={16} /> Export Excel
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-sm text-ink-soft">
                  <th className="p-4 font-medium">Nama</th>
                  <th className="p-4 font-medium">Kontak</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Check-in</th>
                  <th className="p-4 font-medium">Pesan</th>
                </tr>
              </thead>
              <tbody>
                {guests.map(g => (
                  <tr key={g.id} className="border-t border-gray-100 text-sm">
                    <td className="p-4 font-medium">{g.name}</td>
                    <td className="p-4 text-ink-soft">
                      {g.phone}<br/><span className="text-xs">{g.email}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        g.attendance_status === 'Hadir' ? 'bg-green-100 text-green-700' : 
                        g.attendance_status === 'Ragu' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {g.attendance_status}
                      </span>
                    </td>
                    <td className="p-4">
                      {g.checked_in ? (
                        <div>
                          <span className="text-green-600 font-semibold flex items-center gap-1"><CheckCircle size={14}/> Ya</span>
                          <span className="text-xs text-ink-soft">{new Date(g.checked_in_at).toLocaleTimeString()}</span>
                        </div>
                      ) : <span className="text-gray-400">Belum</span>}
                    </td>
                    <td className="p-4 text-xs text-ink-soft max-w-xs truncate" title={g.message}>{g.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
