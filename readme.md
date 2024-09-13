from fpdf import FPDF





# Set title for README
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="Blog API - README", ln=True, align='C')

# Line break
pdf.ln(10)

# Set font for general text
pdf.set_font("Arial", '', 12)

# Define content of the README
readme_content = '''
# Blog API

A RESTful API for managing blog posts and comments, built with Node.js, Express, and MongoDB.

## Table of Contents

- Features
- Technologies
- Installation
- Usage
- API Endpoints
  - Authentication
  - Posts
  - Comments
- Database Schema
- Testing
- Contributing
- License

## Features

- User authentication (registration and login)
- Create, read, update, and delete blog posts
- Create, read, update, and delete comments on posts
- Secure password hashing using bcrypt
- JSON Web Token (JWT) for authentication

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- Jest (for testing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-api.git


   cd blog-api
npm install
