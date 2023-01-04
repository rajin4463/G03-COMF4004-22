const express = require('express');
const auth = require('../controllers/auth');
const router = express.Router();

router.post('/admin', auth.adminAuth);

router.post('/shop', auth.shopAuth);

module.exports = router;