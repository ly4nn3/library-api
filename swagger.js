const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Library API',
        description: 'CSE341 Project 2 API for managing books and authors'
    },
    host: 'localhost:3000', // Change for deply: host: 'https://cse341-project2-8qt8.onrender.com'
    schemes: ['http'], // Chang for deply: schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);