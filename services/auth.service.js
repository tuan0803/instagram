const bcryot = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User');

async function create(user) {
    try {
        const { username, email, full_name, password } = user;
        const hashedPassword = await bcryot.hash(password, 10);
        return result = await userModel.create({ username, email, full_name, password: hashedPassword });
    } catch (error) {
        new Error (error.message);
    }
}


module.exports = { create }