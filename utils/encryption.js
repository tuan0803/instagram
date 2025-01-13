const jwt = require('jsonwebtoken');

function generateToken(acc) {
    const payload = {
        user_id: acc.user_id,
        role: acc.role
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}


module.exports = { generateToken }