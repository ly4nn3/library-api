const Book = require('../models/Book');
const Author = require('../models/Author');
const mongoose = require('mongoose');

// C R E A T E
exports.createBook = async (req, res) => {
    try {
        const {
            title, author, genre, ISBN
        } = req.body;

        if (!title || !author || !genre || !ISBN) {
            return res.status(400).json({
                error: 'All fields are required'
            });
        }

        const authorExists = await Author.findById(author);
        if (!authorExists) {
            return res.status(400).json({
                error: 'Author not found. Please provide valid author ID.'
            });
        }

        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// G E T  A L L
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'firstName lastName');

        if (books.length === 0) {
            return res.status(404).json({
                error: 'No books found'
            });
        }
        res.json(books);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// G E T  B Y  I D
exports.getBookById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    try {
        const book = await Book.findById(id).populate('author', 'firstName lastName');

        if (!book) {
            return res.status(404).json({
                error: 'Book not found'
            });
        }
        res.json(book);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// U P D A T E
exports.updateBookById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    const {
        title,
        author,
        genre,
        publishedYear,
        ISBN,
        summary,
        availableCopies,
        language,
        publisher
    } = req.body;

    const updates = {
        ...(title && { title }),
        ...(author && { author }),
        ...(genre && { genre }),
        ...(publishedYear && { publishedYear }),
        ...(ISBN && { ISBN }),
        ...(summary && { summary }),
        ...(availableCopies && { availableCopies }),
        ...(language && { language }),
        ...(publisher && { publisher })
    };

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, updates, {
            new: true, runValidators: true
        }).populate('author', 'firstName lastName');

        if (!updatedBook) {
            return res.status(404).json({
                error: 'Book not found'
            })
        }
        res.json(updatedBook);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// D E L E T E
exports.deleteBookById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            error: 'Invalid ID format'
        });
    }

    try {
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({
                error: 'Book not found'
            });
        }
        res.json({
            message: 'Book deleted successfully',
            book: deletedBook
        });
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};