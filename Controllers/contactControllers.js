//@desc Get all books
//@endpoints /api/books
//@access public

const getAllBooks = (req,res) =>{
    res.status(200).json({message : `Get all books `});
}
// @desc Get a book by id
// @endpoint api/books/:id
// @access public
const getBookById = (req,res) =>{
    res.status(200).json({message:`Get book with id ${req.params.id}`})
}
//@desc create book
//@endpoints api/books
//@access private

const createBooks = (req,res) => {
    res.status(201).json({message:`create books`})
}

// @desc update book by id 
// @endpoint api/books/:id
// @access public

const updateBookById = (req,res) => {
    res.status(200).json({message:`update book with id ${req.params.id}`})
}

// @desc Delete book by id
//@endpoint api/books/:id
//@access public

const deleteBookById = (req,res) => {
    res.status(200).json({message:`delete book with id ${req.params.id}`})
}
export { getAllBooks , getBookById , createBooks , updateBookById , deleteBookById};