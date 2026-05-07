import React, { useState } from 'react';

function StepTwo({ onNext }) {
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');

  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      {/* Version B header style */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <span className="text-accent text-lg">🗄️</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Step 2 of 4</p>
          <h3 className="text-xl font-semibold text-foreground">Supabase</h3>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Go to your{' '}
        <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer"
          className="text-accent underline">
          Supabase dashboard
        </a>{' '}
        → Project Settings → API. Copy your Project URL and anon/public key.
      </p>

      {/* Version A inputs — same type, placeholder, value, onChange */}
      <input
        type="text"
        placeholder="https://xxxx.supabase.co"
        value={supabaseUrl}
        onChange={e => setSupabaseUrl(e.target.value)}
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent mb-3"
      />
      <input
        type="password"
        placeholder="Supabase anon key"
        value={supabaseKey}
        onChange={e => setSupabaseKey(e.target.value)}
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent mb-4"
      />

      {/* Security note — Version B style */}
      <div className="p-3 bg-secondary/50 rounded-lg border border-border mb-4">
        <p className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">Secure Storage:</span> Your keys are encrypted and never stored in plain text.
        </p>
      </div>

      {/* Version A button — same onClick, disabled logic */}
      <button
        onClick={() => onNext({ supabaseUrl, supabaseKey })}
        disabled={!supabaseUrl || !supabaseKey}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-accent-foreground font-medium py-3 rounded-lg transition-colors"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepTwo;
