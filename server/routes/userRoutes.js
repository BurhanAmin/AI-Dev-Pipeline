const express = require('express');
const router = express.Router();
const { saveCredentials, getCredentials } = require('../controllers/userController');

router.post('/credentials', saveCredentials);
router.get('/credentials/:userId', getCredentials);

module.exports = router;