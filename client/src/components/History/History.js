import React from 'react';

function History({ user }) {
  // Version A: no state, no API calls — just renders empty state

  return (
    <div>
      {/* Version B header style */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Your Projects</h2>
        <p className="text-muted-foreground">All your previously built MVPs.</p>
      </div>

      {/* Version B empty state card */}
      <div className="bg-card rounded-2xl border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-medium text-foreground">Recent Projects</h3>
        </div>
        {/* Version A empty state message — same text */}
        <div className="p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <span className="text-muted-foreground text-xl">📁</span>
          </div>
          <p className="text-muted-foreground text-sm">
            No projects yet — build your first MVP from the Dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
