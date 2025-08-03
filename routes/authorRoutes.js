const express = require("express");
const router = express.Router();
const authorController = require("../controllers/authorController");
const validate = require("../middleware/validate");
const {
    createAuthorSchema,
    updateAuthorSchema,
} = require("../validations/authorValidation");
const authenticateToken = require("../middleware/jwtSession");

// Get all authors
router.get(
    "/",
    /*  #swagger.tags = ['Authors']
        #swagger.summary = 'Get all authors'
        #swagger.description = 'Retrieve all authors from the database'
        #swagger.responses[200] = {
            description: 'Authors retrieved successfully',
            schema: {
                _id: 'string',
                firstName: 'string',
                lastName: 'string',
                bio: 'string',
                birthDate: 'string'
            },
        }
        #swagger.responses[404] = {
            description: 'No authors found',
            schema: {
                error: 'string'
            }
        }
    */
    authorController.getAuthors
);

// Get author by ID
router.get(
    "/:id",
    /*  #swagger.tags = ['Authors']
        #swagger.summary = 'Get author by ID'
        #swagger.description = 'Retrieve a single author by their ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Author ID (24 character hex string)',
            type: 'string',
            required: true,
            example: '6888960c793f2ac6512bb8bf'
        }
        #swagger.responses[200] = {
            description: 'Author retrieved successfully',
            schema: {
                _id: 'string',
                firstName: 'string',
                lastName: 'string',
                bio: 'string',
                birthDate: 'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Invalid ID format',
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
    authorController.getAuthorById
);

// Create new author
router.post(
    "/",
    /*  #swagger.tags = ['Authors']
        #swagger.summary = 'Create new author'
        #swagger.description = 'Add a new author to the database'
        #swagger.requestBody = {
            required: true,
            content: {
                'application/json': {
                    example: {
                        firstName: 'Haruki',
                        lastName: 'Murakami',
                        bio: 'A Japanese writer. His novels, essays, and short stories have been best-sellers in Japan and internationally, with his work translated into 50 languages and having sold millions of copies outside Japan.',
                        birthDate: '1949-01-12'
                    },
                }
            }
        }
        #swagger.responses[201] = {
            description: 'Author created successfully',
            schema: {
                _id: 'string',
                firstName: 'string',
                lastName: 'string',
                bio: 'string',
                birthDate: 'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Validation error - invalid or missing fields',
            schema: {
                error: 'string'
            }
        }
    */
    validate(createAuthorSchema),
    authenticateToken,
    authorController.createAuthor
);

// Update author by ID
router.put(
    "/:id",
    /*  #swagger.tags = ['Authors']
        #swagger.summary = 'Update author by ID'
        #swagger.description = 'Update an existing author by their ID. All fields are optional, but at least one must be provided.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Author ObjectID (24 character hex string)',
            required: true,
            type: 'string',
            example: '6888960c793f2ac6512bb8bf'
        }
        #swagger.requestBody = {
            description: 'Updated author data',
            required: true,
            content: {
                'application/json': {
                    example: {
                        firstName: 'string',
                        lastName: 'string',
                        bio: 'string',
                        birthDate: 'string'
                    }
                }
            }
        }
        #swagger.responses[200] = {
            description: 'Author updated successfully',
            schema: {
                _id: 'string',
                firstName: 'string',
                lastName: 'string',
                bio: 'string',
                birthDate: 'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Validation error - invalid or missing fields',
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
    validate(updateAuthorSchema),
    authenticateToken,
    authorController.updateAuthorById
);

// Delete author by ID
router.delete(
    "/:id",
    /*  #swagger.tags = ['Authors']
        #swagger.summary = 'Delete author by ID'
        #swagger.description = 'Delete an existing author by their ID'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'Author ID (24 character hex string)',
            type: 'string',
            required: true
        }
        #swagger.responses[200] = {
            description: 'Author deleted successfully',
            schema: {
                message:'string'
            }
        }
        #swagger.responses[400] = {
            description: 'Invalid ID format',
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
    authenticateToken,
    authorController.deleteAuthorById
);

module.exports = router;
