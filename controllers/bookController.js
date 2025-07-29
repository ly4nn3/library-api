const Book = require('../models/Book');

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
        res.json(books);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// G E T  B Y  I D
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author', 'firstName lastName');

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
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!book) {
            return res.status(404).json({
                error: 'Book not found'
            })
        }
        res.json(book);
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};

// D E L E T E
exports.deleteBookById = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                error: 'Book not found'
            })
        }
        res.json({
            message: 'Book deleted successfully'
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        });
    }
};