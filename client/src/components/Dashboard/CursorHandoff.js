import React, { useState } from 'react';

function CursorHandoff({ prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card rounded-2xl border border-border mb-6 overflow-hidden">
      {/* Version B header style */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div>
          <h3 className="text-sm font-medium text-foreground">Cursor Handoff Ready</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Open Cursor, paste this into the chat, and start building functionality
          </p>
        </div>
        {/* Version A button — same onClick (handleCopy), same conditional text */}
        <button
          onClick={handleCopy}
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 rounded-lg transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy prompt'}
        </button>
      </div>
      {/* Version A pre — same content */}
      <pre className="px-6 py-4 text-sm text-muted-foreground overflow-auto max-h-64 whitespace-pre-wrap bg-secondary/30">
        {prompt}
      </pre>
    </div>
  );
}

export default CursorHandoff;