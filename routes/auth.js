const express = require('express');
const { register, login, getUser, forgotPassword, newPassword } = require('../controllers/auth');
const { isAdmin, isAuth } = require('../middlewares');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', isAuth, getUser);
router.post('/forgotPassword', forgotPassword);
router.put('/newPassword', newPassword);

module.exports = router;
