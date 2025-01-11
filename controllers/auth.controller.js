const { create } = require('../services/auth.service');



async function register(req, res){
    const user = req.body;
    try {
        const result = await create(user);
        return result;
    } catch (error) {
        return error;
    }
}


module.exports = { register }; 