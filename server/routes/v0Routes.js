const express = require('express');
const router = express.Router();
const { generateUI } = require('../controllers/v0Controller');

router.post('/generate', generateUI);

module.exports = router;