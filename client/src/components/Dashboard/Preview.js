import React, { useState } from 'react';

function Preview({ url }) {
  // Version A logic — untouched
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="bg-card rounded-2xl border border-border mb-6 overflow-hidden">
      {/* Version B header style */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          {/* Browser dot decorations — Version B style */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
          </div>
          <div className="ml-2 bg-secondary rounded-md px-3 py-1 text-xs text-muted-foreground">
            {url}
          </div>
        </div>
        {/* Version A link — same href, target, rel */}
        <a href={url} target="_blank" rel="noreferrer"
          className="text-accent text-sm hover:text-accent/80 transition-colors">
          Open in v0 ↗
        </a>
      </div>

      {/* Version A conditional — iframeError fallback */}
      {iframeError ? (
        <div className="flex flex-col items-center justify-center h-64 text-center px-6">
          <p className="text-muted-foreground text-sm mb-3">Preview unavailable due to browser restrictions.</p>
          <a href={url} target="_blank" rel="noreferrer"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm px-4 py-2 rounded-lg transition-colors">
            View in v0 →
          </a>
        </div>
      ) : (
        // Version A iframe — same src, title, onError
        <iframe
          src={url}
          title="v0 Preview"
          className="w-full h-96 border-0"
          onError={() => setIframeError(true)}
        />
      )}
    </div>
  );
}

export default Preview;
