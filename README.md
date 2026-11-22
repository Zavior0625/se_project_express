# WTWR (What to Wear?)

## Backend Repository

The WTWR frontend connects to an Express.js and MongoDB backend for user authentication, profile management, clothing item management, and likes.

Backend GitHub Repository:
https://github.com/Zavior0625/se_project_express


Project Description

This project is the back-end server for the WTWR (What to Wear?) application. It provides a RESTful API that allows users to manage their profiles and clothing items.

The API uses MongoDB to store user and clothing item information and Express.js to handle HTTP requests.

Functionality

User Management

Retrieve all users.

Retrieve a specific user by ID.

Create new users with a name and avatar.

Clothing Item Management

Retrieve all clothing items.

Create new clothing items with a name, weather category, and image URL.

Delete clothing items.

Like and unlike clothing items.

Error Handling and Validation

Validate user and clothing item information using Mongoose and Validator.

Return appropriate HTTP status codes for invalid requests (400), missing resources (404), and server errors (500).

Handle requests to nonexistent API routes.

Technologies and Techniques Used

Node.js: JavaScript runtime environment for the back-end server.

Express.js: Framework for building RESTful API routes and handling HTTP requests.

MongoDB: NoSQL database for storing application data.

Mongoose: Defines data schemas and manages MongoDB operations.

Validator: Validates URLs in user and clothing item data.

ESLint: Checks JavaScript code quality using the Airbnb style configuration.

Prettier: Helps maintain consistent code formatting.

Nodemon: Automatically restarts the development server when files change.

Git and GitHub: Version control and project hosting.

Running the Project Locally

Install dependencies:

npm install

Make sure MongoDB is running locally.

Start the development server:

npm run dev

The server runs at http://localhost:3001.

Check the code for linting errors:

npm run lint

API Endpoints

Method

Endpoint

Description

GET

/users

Get all users

GET

/users/:userId

Get a specific user

POST

/users

Create a user

GET

/items

Get all clothing items

POST

/items

Create a clothing item

DELETE

/items/:itemId

Delete a clothing item

PUT

/items/:itemId/likes

Like a clothing item

DELETE

/items/:itemId/likes

Remove a like

Project Status

The back-end API includes user management, clothing item management, data validation, and error handling. The project uses a temporary authorization middleware for clothing item operations.

## Project Pitch Video
 
 Check out [https://drive.google.com/file/d/18h5IQYcy-a49h-KcQ5tPMDIl9Ylva6g2/view?usp=drive_link](ADD_LINK_HERE)g