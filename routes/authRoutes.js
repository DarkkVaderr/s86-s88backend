const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// POST: Register a new user
router.post('/register', register);

// POST: Login a user
router.post('/login', login);

module.exports = router;
