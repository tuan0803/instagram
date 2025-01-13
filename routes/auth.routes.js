const express = require('express');
const route = express.Router();
const authController = require('../controllers/auth.controller');


route.post('/register', authController.createUser);


module.exports = route;