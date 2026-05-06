import React, { useState } from 'react';
import PipelineProgress from './PipelineProgress';
import Preview from './Preview';
import CursorHandoff from './CursorHandoff';

const STAGES = ['Translating prompt', 'Generating UI', 'Ready for Cursor', 'Deploying'];

function Dashboard({ user }) {
  const [input, setInput] = useState('');
  const [stage, setStage] = useState(-1);
  const [previewUrl, setPreviewUrl] = useState('');
  const [handoffPrompt, setHandoffPrompt] = useState('');
  const [deployedUrl, setDeployedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBuild = async () => {
    if (!input) return;
    setLoading(true);
    setError('');
    setPreviewUrl('');
    setHandoffPrompt('');
    setDeployedUrl('');

    try {
      // Stage 0: Translate prompt
      setStage(0);
      const claudeRes = await fetch('http://localhost:3001/api/claude/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input })
      });
      const claudeData = await claudeRes.json();
      if (claudeData.error) throw new Error(claudeData.error);

      // Stage 1: Generate UI
      setStage(1);
      const v0Res = await fetch('http://localhost:3001/api/v0/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: claudeData.lovablePrompt,
          projectName: 'project-' + Date.now(),
          v0ApiKey: user.v0ApiKey
        })
      });
      const v0Data = await v0Res.json();
      if (v0Data.error) throw new Error(v0Data.error);
      setPreviewUrl(v0Data.projectUrl);

      // Stage 2: Cursor handoff
      setStage(2);
      const cursorRes = await fetch('http://localhost:3001/api/cursor/handoff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: v0Data.projectUrl,
          userInput: input,
          lovableOutput: claudeData.summary
        })
      });
      const cursorData = await cursorRes.json();
      setHandoffPrompt(cursorData.handoffPrompt);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Build your MVP</h2>
      <p className="text-gray-400 mb-8">Describe your app and we'll handle the rest.</p>

      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-6">
        <textarea
          rows={4}
          placeholder="e.g. A fitness tracker where users can log workouts and see weekly progress charts..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none mb-4"
        />
        <button
          onClick={handleBuild}
          disabled={loading || !input}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? 'Building...' : '⚡ Build my app'}
        </button>
        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>

      {stage >= 0 && <PipelineProgress stages={STAGES} current={stage} />}
      {previewUrl && <Preview url={previewUrl} />}
      {handoffPrompt && <CursorHandoff prompt={handoffPrompt} />}
    </div>
  );
}

export default Dashboard;