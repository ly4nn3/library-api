# Library API

A RESTful API for managing books and authors in a library using **Node.js**, **Express**, and **MongoDB/Mongoose**.

## Features

- CRUD operations for Books
- CRUD operations for Authors
- MongoDB for data storage, accessed via **Mongoose**
- Data validation and error handling

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- [Mongoose](https://mongoosejs.com/) (installed via `npm install`)
- npm

### Installation

1. Clone the repository:
    ```
    git clone https://github.com/your-username/library-api.git
    cd library-api
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Create a `.env` file with your MongoDB URI and preferred PORT.

4. Start the server:
    ```
    npm run dev
    # or
    node server.js
    ```

## Configuration

The `.env` file should include:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```
---

## License

MIT