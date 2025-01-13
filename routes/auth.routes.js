const express = require('express');
const route = express.Router();
const authController = require('../controllers/auth.controller');


route.post('/register', authController.createUser);
route.post('/login', authController.loginUser);
route.post('/logout', authController.logoutUser);


module.exports = route;