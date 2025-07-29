const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    /*  #swagger.tags = ['Home']
        #swagger.summary = 'Welcome to the Library API'
        #swagger.description = 'This is the main entry point of the Library API. Use the endpoints to manage books and authors.'
    */
    res.send('Welcome to the Library API');
});

module.exports = router;