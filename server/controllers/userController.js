const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const saveCredentials = async (req, res) => {
  const { userId, supabaseUrl, supabaseKey, vercelToken } = req.body;

  const { data, error } = await supabase
    .from('users')
    .upsert({ id: userId, supabase_url: supabaseUrl, supabase_key: supabaseKey, vercel_token: vercelToken });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ message: 'Credentials saved', data });
};

const getCredentials = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

module.exports = { saveCredentials, getCredentials };