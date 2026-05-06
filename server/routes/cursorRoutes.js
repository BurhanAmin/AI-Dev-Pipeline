const express = require('express');
const router = express.Router();
const { generateCursorHandoff } = require('../controllers/cursorController');

router.post('/handoff', generateCursorHandoff);

module.exports = router;