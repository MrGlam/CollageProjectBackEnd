const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const authController = require('../controllers/auth');

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/dashboard', authenticateToken, authController.dashboard);

module.exports = router;
