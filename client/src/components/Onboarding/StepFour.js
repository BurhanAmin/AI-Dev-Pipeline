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
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">GitHub Token</h3>
      <p className="text-gray-400 text-sm mb-6">
        Go to <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer"
          className="text-indigo-400 underline">github.com/settings/tokens</a> → Generate new token (classic).
        Give it <strong>repo</strong> scope and paste it below.
      </p>
      <input
        type="password"
        placeholder="ghp_xxxxxxxxxxxx"
        value={githubToken}
        onChange={e => setGithubToken(e.target.value)}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 mb-4"
      />
      {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
      <button
        onClick={handleFinish}
        disabled={!githubToken || loading}
        className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition"
      >
        {loading ? 'Saving...' : 'Finish Setup 🚀'}
      </button>
    </div>
  );
}

export default StepFour;