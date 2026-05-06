import React, { useState } from 'react';
import Onboarding from './components/Onboarding/Onboarding';
import Dashboard from './components/Dashboard/Dashboard';
import History from './components/History/History';

function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState('onboarding');

  const handleOnboardingComplete = (userData) => {
    setUser(userData);
    setScreen('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white tracking-tight">⚡ MVP Pipeline</h1>
        {user && (
          <div className="flex gap-4">
            <button
              onClick={() => setScreen('dashboard')}
              className={`text-sm px-4 py-2 rounded-lg transition ${screen === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setScreen('history')}
              className={`text-sm px-4 py-2 rounded-lg transition ${screen === 'history' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Projects
            </button>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {screen === 'onboarding' && <Onboarding onComplete={handleOnboardingComplete} />}
        {screen === 'dashboard' && <Dashboard user={user} />}
        {screen === 'history' && <History user={user} />}
      </main>
    </div>
  );
}

export default App;