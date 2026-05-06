const express = require('express');
const router = express.Router();
const { deployToVercel } = require('../controllers/vercelController');

router.post('/deploy', deployToVercel);

module.exports = router;