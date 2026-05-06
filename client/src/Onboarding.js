import React, { useState } from 'react';

function Onboarding({ onComplete }) {
  const [form, setForm] = useState({
    userId: '',
    supabaseUrl: '',
    supabaseKey: '',
    vercelToken: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    setStatus('Saving...');
    const res = await fetch('http://localhost:3001/api/users/credentials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.error) return setStatus('Error: ' + data.error);
    setStatus('Connected!');
    onComplete(form.userId);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Connect your accounts</h2>
      <input placeholder="User ID" onChange={e => setForm({...form, userId: e.target.value})} /><br/>
      <input placeholder="Supabase URL" onChange={e => setForm({...form, supabaseUrl: e.target.value})} /><br/>
      <input placeholder="Supabase Anon Key" onChange={e => setForm({...form, supabaseKey: e.target.value})} /><br/>
      <input placeholder="Vercel Token" onChange={e => setForm({...form, vercelToken: e.target.value})} /><br/>
      <button onClick={handleSubmit}>Save & Continue</button>
      <p>{status}</p>
    </div>
  );
}

export default Onboarding;