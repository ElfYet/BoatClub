const express = require('express');
const { loginMember } = require('../Controllers/loginController');

const router = express.Router();

router.post('/login', loginMember);

module.exports = router;