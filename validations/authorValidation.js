const Joi = require('joi');

const createAuthorSchema = Joi.object({
    firstName: Joi.string().trim().min(1).max(30).required(),
    lastName: Joi.string().trim().min(1).max(50).required(),
    bio: Joi.string().allow('', null),
    birthDate: Joi.date().iso().less('now').messages({
        'date.less': 'Birth date must be in the past',
        'date.format': 'Birth date must be a valid ISO date'
    })
});

const updateAuthorSchema = Joi.object({
    firstName: Joi.string().trim().min(1).max(30).optional(),
    lastName: Joi.string().trim().min(1).max(50).optional(),
    bio: Joi.string().allow('', null).optional(),
    birthDate: Joi.date().iso().less('now').messages({
        'date.less': 'Birth date must be in the past',
        'date.format': 'Birth date must be a valid ISO date'
    }).optional()
}).min(1);

module.exports = {
    createAuthorSchema,
    updateAuthorSchema
}