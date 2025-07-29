const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: true
        },
        genre: { type: String, required: true },
        publishedYear: { type: Number },
        ISBN: { type: String, required: true, unique: true },
        summary: { type: String },
        availableCopies: { type: Number, default: 1 },
        language: { type: String, default: 'English' },
        publisher: { type: String }
    }
)

module.exports = mongoose.model('Book', BookSchema);