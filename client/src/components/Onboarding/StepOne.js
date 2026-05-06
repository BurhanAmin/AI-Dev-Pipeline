import React, { useState } from 'react';

function StepOne({ onNext }) {
  const [v0ApiKey, setV0ApiKey] = useState('');

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">v0 API Key</h3>
      <p className="text-gray-400 text-sm mb-6">
        Go to <a href="https://v0.dev/chat/settings/keys" target="_blank" rel="noreferrer"
          className="text-indigo-400 underline">v0.dev/chat/settings/keys</a>, create a new key, and paste it below.
      </p>
      <input
        type="password"
        placeholder="v0_xxxxxxxxxxxx"
        value={v0ApiKey}
        onChange={e => setV0ApiKey(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-4"
      />
      <button
        onClick={() => onNext({ v0ApiKey })}
        disabled={!v0ApiKey}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepOne;