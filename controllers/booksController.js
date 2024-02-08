import asyncHandler from "express-async-handler";
import errorResponse from "../utils/error.js";
import successResponse from "../utils/succes.js";
import Book  from "../models/bookModel.js";

// @desc get all books
// @endpoints Get /books/getAllBooks
// access public for now

const getAllBooks = asyncHandler(async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length === 0) {
      return res.status(204).json({ message: "No books available" });
    }
    return successResponse(res, 200, "Successfully book retrieved", books);
  } catch (error) {
    return errorResponse(res,500, `Error while fetching data ${error.message}`);
  }
});

// @desc Create a new book
// @endpoints POST /books
// @access public for now

const createbook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return successResponse(res, 201, "Successfully Book created ", book);
  } catch (error) {
    return errorResponse(res,500,`Error while fetching data ${error.message}` );
  }
});

// @desc get a single book by ID
// @endpoints Get /books/:id
// access public for now

const getSingleBook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
    
  } catch (error) {
   return errorResponse(res, 500, `Error while fetching data ${error.message}`);
  }
});

// @desc Update a book by ID
// @endpoints Update /books/:id
// @access public for now

const Updatebook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return successResponse(res, 200, "Successfully Book updated ", book);
  } catch (error) {
    return errorResponse(res,500,`Error while fetching data ${error.message}`
    );
  }
});

// @desc Delete a book by ID
// @endpoints DELETE /books/:id
// @access public for now

const deletebook = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return successResponse(res, 200, "Successfully Book deleted ", book);
    
  } catch (error) {
     return errorResponse(res, 500, `Error while fetching data ${error.message}`);
  }
});

export { getAllBooks, getSingleBook, Updatebook, deletebook, createbook };
