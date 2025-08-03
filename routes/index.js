const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // #swagger.ignore = true
    res.json({
        message: "Welcome to the Library API 📚",

        steps: [
            "1. 🔐 Login at /auth/github",
            "2. 🎟️ Copy your JWT token from the response",
            "3. 📖 View docs at /api-docs",
            "4. ▶️ Start using the API with your token",
        ],

        quickLinks: {
            "🔐 Login": "/auth/github",
            "📖 Documentation": "/api-docs",
            "📚 Authors": "/api/authors",
            "📖 Books": "/api/books",
        },
    });
});

module.exports = router;
