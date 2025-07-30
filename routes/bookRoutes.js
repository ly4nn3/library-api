const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const validate = require('../middleware/validate');
const { createBookSchema, updateBookSchema } = require('../validations/bookValidation');

// Get all books
router.get('/',
    /*  #swagger.tags = ['Books']
        #swagger.summary = 'Get all books'
        #swagger.description = 'Retrieve all books from the database'
        #swagger.responses[200] = [
            {
                description: 'Books retrieved successfully',
                schema: {
                    _id: 'string',
                    title: 'string',
                    author: {
                        _id: 'string',
                        firstName: 'string',
                        lastName: 'string'
                    },
                    genre: 'string',
                    publishedYear: 'number',
                    ISBN: 'string',
                    summary: 'string',
                    availableCopies: 'number',
                    language: 'string',
                    publisher: 'string'
                }
            }
        ]
        #swagger.responses[404] = {
            description: 'No books found',
            schema: {
                error: 'string'
            }
        }
    */
    bookController.getAllBooks
);

// Get book by ID
router.get('/:id',
    /*  #swagger.tags = ['Books']
        #swagger.summary = 'Get book by ID'
        #swagger.description = 'Retrieve a single book by its ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Book ID (24 character hex string)',
            type: 'string',
            required: true,
            example: '688898eaa1a475eac7b45072'
        }
        #swagger.responses[200] = {
            description: 'Book retrieved successfully',
            schema: {
                _id: 'string',
                title: 'string',
                author: {
                    _id: 'string',
                    firstName: 'string',
                    lastName: 'string'
                },
                genre: 'string',
                publishedYear: 'number',
                ISBN: 'string',
                summary: 'string',
                availableCopies: 'number',
                language: 'string',
                publisher: 'string'
            }
        }
    */
    bookController.getBookById
);

// Create new book
router.post('/',
    /*  #swagger.tags = ['Books']
        #swagger.summary = 'Create new book'
        #swagger.description = 'Add a new book to the database. Note: "author" field must reference an existing author ID.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Book object',
            required: true,
            schema: {
                title: "Sense and Sensibility",
                author: "6888960c793f2ac6512bb8bf",
                genre: "Novel",
                publishedYear: 2024,
                ISBN: "9780593622469",
                summary: "Follows the contrasting experiences of the Dashwood sisters, Elinor and Marianne...",
                availableCopies: 6,
                language: "English",
                publisher: "Puffin Books"
            }
        }
        #swagger.responses[201] = {
            description: 'Book created successfully',
            schema: {
                _id: 'string',
                title: 'string',
                author: {
                    _id: 'string',
                    firstName: 'string',
                    lastName: 'string'
                },
                genre: 'string',
                publishedYear: 'number',
                ISBN: 'string',
                summary: 'string',
                availableCopies: 'number',
                language: 'string',
                publisher: 'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Missing fields or invalid input',
            schema: {
                error: 'string'
            }
        }
        #swagger.responses[404] = {
            description: 'Author not found',
            schema: {
                error: 'string'
            }
        }
    */
    validate(createBookSchema),
    bookController.createBook
);


// Update book by ID
router.put('/:id',
    /*  #swagger.tags = ['Books']
        #swagger.summary = 'Update book by ID'
        #swagger.description = 'Update an existing book by its ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Book ObjectID (24 character hex string)',
            type: 'string',
            required: true,
            example: '688898eaa1a475eac7b45072'
        }
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Updated book object',
            required: true,
            schema: {
                title: 'Sense and Sensibility',
                genre: 'Novel',
                publishedYear: 2024,
                ISBN: '9780593622469',
                summary: "Updated summary.",
                availableCopies: 6,
                language: 'English',
                publisher: 'Puffin Books'
            }
        }
        #swagger.responses[200] = {
            description: 'Book updated successfully',
            schema: {
                _id: 'string',
                title: 'string',
                author: {
                    _id: 'string',
                    firstName: 'string',
                    lastName: 'string'
                },
                genre: 'string',
                publishedYear: 'number',
                ISBN: 'string',
                summary: 'string',
                availableCopies: 'number',
                language: 'string',
                publisher: 'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Invalid ID format',
            schema: {
                error: 'string'
            }
        }
        #swagger.responses[404] = {
            description: 'Book not found',
            schema: {
                error: 'string'
            }
        }
    */
    validate(updateBookSchema),
    bookController.updateBookById
);

// Delete book by ID
router.delete('/:id',
    /*  #swagger.tags = ['Books']
        #swagger.summary = 'Delete book by ID'
        #swagger.description = 'Delete an existing book by its ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Book ObjectID (24 character hex string)',
            type: 'string',
            required: true,
            example: '688898eaa1a475eac7b45072'
        }
        #swagger.responses[204] = {
            description: 'Book deleted successfully. No content returned'
        }
        #swagger.responses[400] = {
            description: 'Invalid ID format',
            schema: {
                error: 'string'
            }
        }
        #swagger.responses[404] = {
            description: 'Book not found',
            schema: {
                error: 'string'
            }
        }
    */
    bookController.deleteBookById
);

module.exports = router;