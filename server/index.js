const express = require('express');
const cors = require('cors');
const vercelRoutes = require('./routes/vercelRoutes');
const claudeRoutes = require('./routes/claudeRoutes');
const cursorRoutes = require('./routes/cursorRoutes');
const v0Routes =require('./routes/v0Routes');
const supabaseRoutes=require('./routes/supabaseRoutes');

require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/vercel',vercelRoutes);
app.use('/api/claude',claudeRoutes);
app.use('/api/cursor',cursorRoutes);
app.use('/api/v0',v0Routes);
app.use('/api/supabase',supabaseRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Server running' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});