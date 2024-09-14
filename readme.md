# Blog API

This is a RESTful API for managing blog posts and comments, built with Node.js, Express, and MongoDB. The API allows users to create, read, update, and delete blog posts and comments.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Endpoints](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- User authentication (registration and login).
- Create, read, update, and delete blog posts.
- Create, read, update, and delete comments on posts.
- Secure password hashing using bcrypt.
- JSON Web Token (JWT) for secure authentication.

## Demo

A live demo of the application can be accessed at [Live Demo](/).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- A MongoDB database (local or cloud).
- A code editor like Visual Studio Code.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Uttam7470/Blog-API.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blog-api
   ```
3. Install the dependencies:
   ```sh
   npm init -y
   ```

## Running the Application

To start the application locally:

1. Set up your environment variables in a .env file:
   ```sh
   MONGO_URI=mongodb://localhost:27017/blog
   JWT_SECRET=your_jwt_secret

   ```
2. Start the server:

   ```sh
   npm index.js

   ```

3. Open your browser or API client and go to http://localhost:5000.

## Folder Structure
```
blog-api/
│
├── controllers/
│   ├── authController.js
│   ├── commentController.js
│   └── postController.js
├── models/
│   ├── Comment.js
│   └── Post.js
├── routes/
│   ├── authRoutes.js
│   ├── commentRoutes.js
│   └── postRoutes.js
├── middlewares/
│   └── verifyToken.js
├── config/
│   └── db.js
├── .env
├── package.json
└── README.md
```

# API Endpoints

## Authentication

- **Register** : `POST /auth/register`
- **Login** : `POST /auth/login`

## Posts

- **Create Post** : `POST /posts`
- **Get All Posts** : `GET /posts`
- **Get Single Post** : `GET /posts/:id`
- **Update Post** : `PUT /posts/:id`
- **Delete Post** : `Delete /posts/:id`

## Comments

- **Create Comment**: `POST /comments`
- **Get Comments for a Post**: `GET /comments?post_id=PostID`
- **Get Single Comment**: `GET /comments/:id`
- **Update Comment**: `PUT /comments/:id`
- **Delete Comment**: `DELETE /comments/:id`

## Technologies Used

- **Node.js**: Node.js: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM for MongoDB and Node.js.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JWTs.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch-name`).
6. Open a pull request.



## API Testing Documentation
- This document outlines the process for testing the API endpoints using Postman.

## Prerequisites

**Postman** installed on your machine.
**API running** locally at http://localhost:5000.
**JWT secret**: myVerySecretJWTKey123!@#$%^&*()

## Endpoints

1. **Create a Comment**
**Endpoint**: POST /comments
Request:
- URL: http://localhost:5000/comments
- Method: POST
- Headers:
   - Authorization: Bearer [Your JWT Token]
   - Content-Type: application/json
- Body (JSON):

{
    "post_id": "60d5ec49f1b2a2b1c8e4f8f1",  // Replace with a valid post ID
    "content": "This is a new comment."
}