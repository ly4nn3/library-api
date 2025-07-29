require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/config');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// R O U T E S
// Authors
app.use('/api/authors', authorRoutes);
// Books
app.use('/api/books', bookRoutes);
// Main/home page
app.use('/', require('./routes'));

// Connect to MongoDB
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

startServer();