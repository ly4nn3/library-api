const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
    info: {
        title: "Library API",
        description:
            "CSE341 Project 2 API for managing books and authors\n## 🚀 Quick Start\n1. **Login**: Visit [/auth/github](/auth/github)\n2. **Copy Token**: From the JSON response\n3. **Authorize**: Click the 'Authorize' button below\n4. **Paste Token**: Enter your JWT token\n5. **Test**: Use any protected endpoint!",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Development server",
        },
        {
            url: "https://cse341-project2.onrender.com",
            description: "Production server",
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                description: "JWT token obtained from GitHub OAuth login",
            },
        },
    },
    security: [
        {
            BearerAuth: [],
        },
    ],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
