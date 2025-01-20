# Authentication API Project

This project is a simple authentication API built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to register, log in, and view their profiles securely using **JSON Web Token (JWT)** for authentication.

## Table of Contents

- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Routes and Testing](#routes-and-testing)
- [Contact](#contact)

## Features

- User registration with email, username, and password.
- Secure login with JWT authentication.
- Token generation during registration for direct access to the profile page (optional).
- Protected route for viewing user profiles.
- Proper error handling and validation.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Built With

This project was built using the following technologies:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Prerequisites

Before setting up the project, ensure the following are installed on your system:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git (optional, for cloning the repository)

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AmirrezaAhmadi/Authentication-API.git
   cd Authentication-API
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create the .env file:

- Rename the .env.example file to .env:
  ```bash
  mv .env.example .env
  ```
- Fill in the following variables in .env:
  ```bash
  PORT=3000
  MONGO_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-secret-key>
  ```

4. Start the server:
   ```bash
   npm start
   ```
5. The server will run on http://localhost:3000 by default.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Routes and Testing

Use Postman or a similar API testing tool to test the endpoints:

1. Register a new user

- Endpoint: POST /register
- Request Body (JSON):
    ```bash
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "password123"
    }
    ```
- Response:

  ```bash
  {
      "message": "User registered successfully",
      "id": "user-id",
      "email": "test@example.com",
      "username": "testuser",
      "token": "jwt-token"
    }
  ```

**Note: A JWT token is generated during registration. You can use this token to access the profile page directly without logging in separately. If you don't need this token, you can ignore it.**

2. Login a user

- Endpoint: POST /login
- Request Body (JSON):

    ```bash
    {
      "email": "test@example.com",
      "password": "password123"
    }
  ```

- Response:

    ```bash
    {
      "message": "Login Successful",
      "token": "jwt-token",
      "id": "user-id",
      "email": "test@example.com",
      "username": "testuser"
    }
    ```

3. Get user profile

- Endpoint: GET /profile
- Headers:

  ```bash
  {
    "Authorization": "Bearer jwt-token"
  }
  ```

- Response:

  ```bash
  {
    "user": {
      "id": "user-id",
      "email": "test@example.com",
      "username": "testuser",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
  }
  ```

## Contact

You can reach me through the following:

- Email: AmirrezaAhmadi.GH@Gmail.com
- Telegram: https://t.me/AmirrezaDevelop
- Instagram: https://www.instagram.com/codewithamirreza
- Project Link: https://github.com/AmirrezaAhmadi/Authentication-API.git

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>
