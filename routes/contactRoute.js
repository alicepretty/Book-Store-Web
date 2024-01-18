// Import the express module
import express from 'express';

// Create a new router object
const router = express.Router();

// Import the controller functions from the contactControllers module
import { getAllBooks, getBookById , createBooks ,updateBookById , deleteBookById} from "../Controllers/contactControllers.js";

// Set up a route handler for GET requests to the path '/'
// This will return all books
router.route("/").get(getAllBooks);

// Set up a route handler for GET requests to the path '/:id'
// This will return the book with the given ID
router.route("/:id").get(getBookById);

// Set up a route handler for POST requests to the path '/'
// This will create a new book
router.route("/").post(createBooks);

// Set up a route handler for PUT requests to the path '/:id'
// This will update the book with the given ID
router.route("/:id").put(updateBookById);

// Set up a route handler for DELETE requests to the path '/:id'
// This will delete the book with the given ID
router.route("/:id").delete(deleteBookById);

// Export the router object
export default router;