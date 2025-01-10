const validateUser = require('../validators/userValidator');
const { create } = require('../services/auth.service');


async function createUser(req, res){
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    try {
        const user = req.body;
        const result = await create(user);
        return res.status(201).json({ success: true, message: 'User created successfully', data: result });
    }catch(e){
        return res.status(500).json({message: e.message});
    }

}


module.exports = { createUser }

