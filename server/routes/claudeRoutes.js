const express = require('express');
const router = express.Router();
const { translatePrompt } = require('../controllers/claudeController');

router.post('/translate', translatePrompt);

module.exports = router;