import React, { useState } from 'react';

function Preview({ url }) {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="bg-gray-900 rounded-2xl border border-gray-800 mb-6 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">UI Preview</h3>
        <a href={url} target="_blank" rel="noreferrer"
          className="text-indigo-400 text-sm hover:text-indigo-300 transition">
          Open in v0 ↗
        </a>
      </div>
      {iframeError ? (
        <div className="flex flex-col items-center justify-center h-64 text-center px-6">
          <p className="text-gray-400 text-sm mb-3">Preview unavailable due to browser restrictions.</p>
          <a href={url} target="_blank" rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition">
            View in v0 →
          </a>
        </div>
      ) : (
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