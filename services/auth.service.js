const User = require('../models/User');
const { generateToken } = require('../utils/encryption');


async function create(user) {
    try{
        const { username, full_name, email, password } = user;

        const result = await User.create({ username, full_name, email, password });
        return result;
    } catch(err){
        console.log(err);
        throw new Error('Error creating user');
    }
} 

async function login(user) {
    try {
        const { username, password } = user;
        const acc = await User.findOne({ where: { username } });
        if (!acc) return acc;
        const isValid = await acc.comparePassword(password);
        if(!isValid) return isValid;
        const token = generateToken(acc);
        return token;
    } catch (error) {
        console.log(error)
        throw new Error('Internal Server Error');
    }
}

async function logout(token) {
    try {
        const expireDate = new Date();
        return true;
    } catch (error) {
        console.log(error)
        throw new Error('Internal Server Error'); 
    }
}
module.exports = { create, login, logout }