import React, { useState } from 'react';

function StepTwo({ onNext }) {
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">Supabase</h3>
      <p className="text-gray-400 text-sm mb-6">
        Go to your <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer"
          className="text-indigo-400 underline">Supabase dashboard</a> → Project Settings → API.
        Copy your Project URL and anon/public key.
      </p>
      <input
        type="text"
        placeholder="https://xxxx.supabase.co"
        value={supabaseUrl}
        onChange={e => setSupabaseUrl(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-3"
      />
      <input
        type="password"
        placeholder="Supabase anon key"
        value={supabaseKey}
        onChange={e => setSupabaseKey(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-4"
      />
      <button
        onClick={() => onNext({ supabaseUrl, supabaseKey })}
        disabled={!supabaseUrl || !supabaseKey}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepTwo;