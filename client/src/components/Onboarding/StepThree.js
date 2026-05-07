import React, { useState } from 'react';

function StepThree({ onNext }) {
  const [vercelToken, setVercelToken] = useState('');

  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      {/* Version B header style */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <span className="text-accent text-lg">▲</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Step 3 of 4</p>
          <h3 className="text-xl font-semibold text-foreground">Vercel Token</h3>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Go to{' '}
        <a href="https://vercel.com/account/tokens" target="_blank" rel="noreferrer"
          className="text-accent underline">
          vercel.com/account/tokens
        </a>
        , create a new token, and paste it below.
      </p>

      {/* Version A input — same type, placeholder, value, onChange */}
      <input
        type="password"
        placeholder="Vercel token"
        value={vercelToken}
        onChange={e => setVercelToken(e.target.value)}
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent mb-4"
      />

      {/* Security note — Version B style */}
      <div className="p-3 bg-secondary/50 rounded-lg border border-border mb-4">
        <p className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">Secure Storage:</span> Your token is encrypted and never stored in plain text.
        </p>
      </div>

      {/* Version A button — same onClick, disabled logic */}
      <button
        onClick={() => onNext({ vercelToken })}
        disabled={!vercelToken}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-accent-foreground font-medium py-3 rounded-lg transition-colors"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepThree;
