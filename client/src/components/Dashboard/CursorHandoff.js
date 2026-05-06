import React, { useState } from 'react';

function CursorHandoff({ prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 mb-6 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div>
          <h3 className="text-sm font-medium text-white">Cursor Handoff Ready</h3>
          <p className="text-xs text-gray-500 mt-0.5">Open Cursor, paste this into the chat, and start building functionality</p>
        </div>
        <button onClick={handleCopy}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition">
          {copied ? '✓ Copied!' : 'Copy prompt'}
        </button>
      </div>
      <pre className="px-6 py-4 text-sm text-gray-300 overflow-auto max-h-64 whitespace-pre-wrap">
        {prompt}
      </pre>
    </div>
  );
}

export default CursorHandoff;