import React, { useState } from 'react';

function StepThree({ onNext }) {
  const [vercelToken, setVercelToken] = useState('');

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">Vercel Token</h3>
      <p className="text-gray-400 text-sm mb-6">
        Go to <a href="https://vercel.com/account/tokens" target="_blank" rel="noreferrer"
          className="text-indigo-400 underline">vercel.com/account/tokens</a>, create a new token, and paste it below.
      </p>
      <input
        type="password"
        placeholder="Vercel token"
        value={vercelToken}
        onChange={e => setVercelToken(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-4"
      />
      <button
        onClick={() => onNext({ vercelToken })}
        disabled={!vercelToken}
        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepThree;