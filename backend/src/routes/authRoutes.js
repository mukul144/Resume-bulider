const express = require('express');
const { signupRequest, verifyOtp, signup, login, signout } = require('../controllers/authController');
const router = express.Router();

router.post('/signup-request', signupRequest); 

router.post('/verify-otp', verifyOtp);         

router.post('/login', login);

router.post('/signout', signout);

module.exports = router;
