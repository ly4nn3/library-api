const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        bio: { type: String },
        birthDate: { type: Date }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);