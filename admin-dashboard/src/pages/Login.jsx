import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { LogIn } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setErrorMsg(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gold-light/40 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-rosedeep mb-2">RSVP System</h1>
          <p className="text-ink-soft">Sign in to manage guests or scan QR codes.</p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm text-ink-soft mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-rosedeep"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-ink-soft mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-rosedeep"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-rosedeep text-white py-3 rounded-xl font-medium shadow-md hover:bg-rose transition-colors disabled:opacity-70"
          >
            <LogIn size={20} />
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
