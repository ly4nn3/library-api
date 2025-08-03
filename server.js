require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config");
const passport = require("./config/passport");

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("json spaces", 2);
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

// R O U T E S
// Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Main/home page
app.use("/", require("./routes"));
// Authentication
app.use("/auth", authRoutes);
// Authors
app.use("/api/authors", authorRoutes);
// Books
app.use("/api/books", bookRoutes);

// Connect to MongoDB
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (e) {
        console.error("Error connecting to the database:", e.message);
        process.exit(1);
    }
};

startServer();
