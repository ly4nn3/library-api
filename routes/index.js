const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library API');
});

module.exports = router;