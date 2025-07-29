const Author = require('../models/Author');
const mongoose = require('mongoose');

// C R E A T E
exports.createAuthor = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        if (!firstName || !lastName) {
            return res.status(400).json({
                error: 'First and last name required'
            });
        }
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// G E T  A L L
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// G E T  B Y  I D
exports.getAuthorById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({
                error: 'Author not found'
            });
        }
        res.json(author);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

// U P D A T E
exports.updateAuthorById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });
        if (!author) {
            return res.status(404).json({
                error: 'Author not found'
            });
        }
        res.json(author);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}

// D E L E T E
exports.deleteAuthorById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) {
            return res.status(404).json({
                error: 'Author not found'
            });
        }
        res.json({ message: 'Author deleted successfully' });
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
}