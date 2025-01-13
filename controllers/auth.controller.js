const registerValidation = require('../validation/register.validator');
const loginValidation = require('../validation/login.validator')
const { create, login, logout } = require('../services/auth.service');
const { console } = require('inspector');


async function createUser(req, res){
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    try {
        const user = req.body;
        const result = await create(user);
        return res.status(201).json({ success: true, message: 'User created successfully', data: result });
    }catch(e){
        return res.status(500).json({ success: false, message: e.message });
    }

}

async function loginUser(req, res){
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    try {
        const user = req.body;
        const result = await login(user);
        return res.status(200).json({ success: true, message: 'User logged in successfully', data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

async function logoutUser(req, res){
    const token = req.header('Authorizaion')?.split(' ')[1];
    console.log(token);
    if(!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    try {
        const result = await logout(token);
        res.clearCookie('token');
        return res.status(200).json({ success: true, message: 'User logged out successfully ', data: result });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
        
}


module.exports = { createUser, loginUser, logoutUser }
