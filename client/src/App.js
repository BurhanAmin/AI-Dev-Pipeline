import React, { useState } from 'react';
import Onboarding from './components/Onboarding/Onboarding';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';

function App() {
  // Version A logic — untouched
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState('onboarding');

  const handleOnboardingComplete = (userData) => {
    setUser(userData);
    setScreen('dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Version B nav UI */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-accent text-sm">⚡</span>
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">MVP Pipeline</span>
        </div>

        {/* Version A condition — only show nav when user exists */}
        {user && (
          <div className="flex gap-2">
            <button
              onClick={() => setScreen('dashboard')}
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                screen === 'dashboard'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setScreen('history')}
              className={`text-sm px-4 py-2 rounded-lg transition-colors ${
                screen === 'history'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              Projects
            </button>
          </div>
        )}
      </nav>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        {/* Version A routing — untouched */}
        {screen === 'onboarding' && <Onboarding onComplete={handleOnboardingComplete} />}
        {screen === 'dashboard' && <Dashboard user={user} />}
        {screen === 'history' && <History user={user} />}
      </main>
    </div>
  );
}

export default App;
