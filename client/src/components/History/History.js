import React from 'react';

function History({ user }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Your Projects</h2>
      <p className="text-gray-400 mb-8">All your previously built MVPs.</p>
      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-12 text-center">
        <p className="text-gray-500 text-sm">No projects yet — build your first MVP from the Dashboard.</p>
      </div>
    </div>
  );
}

export default History;