import React, { useState } from 'react';

function StepFour({ onNext, data }) {
  const [githubToken, setGithubToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFinish = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:3001/api/users/credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, githubToken })
      });
      const result = await res.json();
      if (result.error) { setError(result.error); setLoading(false); return; }
      onNext({ githubToken });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      {/* Version B header style */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <span className="text-accent text-lg">🐙</span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Step 4 of 4</p>
          <h3 className="text-xl font-semibold text-foreground">GitHub Token</h3>
        </div>
      </div>

      {/* Configuration summary — Version B style */}
      <div className="bg-secondary/50 rounded-xl border border-border divide-y divide-border mb-6">
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">v0 API</span>
          <span className="text-xs text-accent font-medium">✓ Connected</span>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Supabase</span>
          <span className="text-xs text-accent font-medium">✓ Connected</span>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Vercel</span>
          <span className="text-xs text-accent font-medium">✓ Connected</span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6">
        Go to{' '}
        <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer"
          className="text-accent underline">
          github.com/settings/tokens
        </a>{' '}
        → Generate new token (classic). Give it <strong>repo</strong> scope and paste it below.
      </p>

      {/* Version A input — same type, placeholder, value, onChange */}
      <input
        type="password"
        placeholder="ghp_xxxxxxxxxxxx"
        value={githubToken}
        onChange={e => setGithubToken(e.target.value)}
        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent mb-4"
      />

      {/* Version A error — untouched */}
      {error && <p className="text-destructive text-sm mb-3">{error}</p>}

      {/* Version A button — same onClick (handleFinish), disabled logic, loading text */}
      <button
        onClick={handleFinish}
        disabled={!githubToken || loading}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed text-accent-foreground font-medium py-3 rounded-lg transition-colors"
      >
        {loading ? 'Saving...' : 'Finish Setup 🚀'}
      </button>
    </div>
  );
}

export default StepFour;