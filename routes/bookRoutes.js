const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get all books
router.get('/', bookController.getAllBooks);

// Get book by ID
router.get('/:id', bookController.getBookById);

// Create new book
router.post('/', bookController.createBook);

// Update book by ID
router.put('/:id', bookController.updateBookById);

// Delete book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;