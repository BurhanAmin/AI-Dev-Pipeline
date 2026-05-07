import React from 'react';

// Version A props — stages array + current index (0-based)
function PipelineProgress({ stages, current }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border mb-6">
      <h3 className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
        Pipeline Progress
      </h3>
      <div className="space-y-4">
        {stages.map((stage, i) => {
          const isCompleted = i < current;
          const isCurrent = i === current;

          return (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < stages.length - 1 && (
                <div className={`absolute left-4 top-10 w-0.5 h-8 transition-colors duration-300 ${
                  isCompleted ? 'bg-accent' : 'bg-border'
                }`} />
              )}

              <div className="flex items-center gap-4">
                {/* Icon — Version B style, Version A logic */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent text-accent-foreground'
                    : isCurrent
                    ? 'bg-accent/20 text-accent border-2 border-accent animate-pulse'
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  {isCompleted ? '✓' : i + 1}
                </div>

                {/* Label */}
                <span className={`text-sm font-medium transition-colors ${
                  isCurrent ? 'text-foreground' : isCompleted ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  {stage}
                </span>

                {/* Status badge */}
                <div className="ml-auto">
                  {isCompleted && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">Done</span>
                  )}
                  {isCurrent && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent animate-pulse">In Progress</span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">Pending</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PipelineProgress;