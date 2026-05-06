import React from 'react';

function PipelineProgress({ stages, current }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 mb-6">
      <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wide">Pipeline Progress</h3>
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
              ${i < current ? 'bg-green-500' : i === current ? 'bg-indigo-500 animate-pulse' : 'bg-gray-700 text-gray-500'}`}>
              {i < current ? '✓' : i + 1}
            </div>
            <span className={`text-sm ${i === current ? 'text-white font-medium' : i < current ? 'text-green-400' : 'text-gray-500'}`}>
              {stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PipelineProgress;