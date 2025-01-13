const Joi = require('joi');

const userValidation = Joi.object({
    username: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
        'string.empty': 'Username is required.',
        'string.min': 'Username must be at least 3 characters long.',
        'string.max': 'Username cannot exceed 50 characters.',
    }),
  
    email: Joi.string()
        .email()
        .required()
        .messages({
        'string.empty': 'Email is required.',
        'string.email': 'Email format is invalid.',
    }),
    
    full_name: Joi.string()
        .min(8)
        .max(255)
        .required()
        .messages({
        'string.empty': 'Full name is required.',
        'string.min': 'Full name must be at least 8 characters long.',
        'string.max': 'Full name cannot exceed 255 characters.',
    }),
  
    password: Joi.string()
        .min(8)
        .required()
        .messages({
        'string.empty': 'Password is required.',
        'string.min': 'Password must be at least 8 characters long.',
    }),
  
    profile_picture: Joi.string()
        .uri()
        .optional()
        .messages({
        'string.uri': 'Profile picture must be a valid URL.',
    }),
  
    bio: Joi.string()
        .max(255)
        .optional()
        .messages({
        'string.max': 'Bio cannot exceed 255 characters.',
    }),
  
  is_private: Joi.boolean().optional(),
  is_verified: Joi.boolean().optional(),
  role: Joi.string().valid('USER', 'EMPLOYEE', 'ADMIN').default('USER'),
  created_at: Joi.date().optional(),
  updated_at: Joi.date().optional()
});

const validateUser = (user) => {
    return userValidation.validate(user, { abortEarly: false }); 
  };

module.exports = validateUser;
