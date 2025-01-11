const User = require('../models/User');
const userValidator = require('../validation/user.validator'); 


async function create(user) {
    try{
        const { error } = await userValidator.create(user);
        if(error) return { status: 400, message: error.details[0].message };
        const { username, full_name, email, password } = user;

        const result = await User.create({ username, full_name, email, password });
        return res.status(201).json({ success: true, message: 'User created successfully', data: result });
    } catch(err){
        return res.status(500).json({ success: false, message: 'Internal Server Error', data: err });
    }
} 


module.exports = { create }