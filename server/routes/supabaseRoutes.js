const express = require('express');
const router = express.Router();
const { connectSupabase } = require('../controllers/supabaseController');

router.post('/connect', connectSupabase);

module.exports = router;