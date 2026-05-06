const { createClient } = require('@supabase/supabase-js');

const connectSupabase = async (req, res) => {
  const { supabaseUrl, supabaseKey } = req.body;

  try {
    const client = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await client.from('users').select('*').limit(1);
    if (error) return res.status(400).json({ error: 'Invalid Supabase credentials' });
    res.json({ message: 'Supabase connected successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { connectSupabase };