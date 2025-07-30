const Joi = require('joi');

const createBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().hex().length(24).required(),
    genre: Joi.string().required(),
    ISBN: Joi.string().required(),
    publishedYear: Joi.number().integer().min(0).optional(),
    summary: Joi.string().optional(),
    availableCopies: Joi.number().integer().min(0).optional(),
    language: Joi.string().optional(),
    publisher: Joi.string().optional(),
});

const updateBookSchema = Joi.object({
    title: Joi.string().optional(),
    author: Joi.string().hex().length(24).optional(),
    genre: Joi.string().optional(),
    ISBN: Joi.string().optional(),
    publishedYear: Joi.number().integer().min(0).optional(),
    summary: Joi.string().optional(),
    availableCopies: Joi.number().integer().min(0).optional(),
    language: Joi.string().optional(),
    publisher: Joi.string().optional(),
}).min(1);

module.exports = {
    createBookSchema,
    updateBookSchema
};