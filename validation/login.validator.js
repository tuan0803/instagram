const Joi = require('joi');

const loginValidation = Joi.object({
    username: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.empty': 'Username is required.',
            'string.min': 'Username must be at least 3 characters long.',
            'string.max': 'Username cannot exceed 50 characters.',
        }),

    password: Joi.string()
        .min(8)
        .required()
        .messages({
            'string.empty': 'Password is required.',
            'string.min': 'Password must be at least 8 characters long.',
        }),
});

const validateLogin = (loginData) => {
    return loginValidation.validate(loginData, { abortEarly: false });
};

module.exports = validateLogin
