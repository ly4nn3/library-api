const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Get all authors
router.get('/', authorController.getAuthors);

// Get author by ID
router.get('/:id', authorController.getAuthorById);

// Create new author
router.post('/', authorController.createAuthor);

// Update author by ID
router.put('/:id', authorController.updateAuthorById);

// Delete author by ID
router.delete('/:id', authorController.deleteAuthorById);

module.exports = router;