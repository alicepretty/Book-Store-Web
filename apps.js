// Import the dotenv module and configure it to read the .env file
import dotenv from 'dotenv';
dotenv.config();

// Import the express module
import express from 'express';

// Create a new express application
const app = express();

// Set the port to the value of process.env.PORT, or 3000 if process.env.PORT is not set
const port = process.env.PORT || 3000;

// Import the contactRoute module
import contactRoute from './routes/contactRoute.js';

// Use the contactRoute module for handling requests to /api/books
app.use("/api/books", contactRoute);

// Set up a route handler for GET requests to the path '/'
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server, listening on the specified port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});