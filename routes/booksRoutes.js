import { Router } from "express";
import BookValidation from "../validations/bookValidations.js";
import {
  getAllBooks,
  getSingleBook,
  createbook,
  Updatebook,
  deletebook,

} from "../controllers/booksController.js";

const router = Router();
const { verifyCreate } = BookValidation;

router.get("/", getAllBooks);
router.post("/", verifyCreate, createbook);
router.get("/:bookId", getSingleBook);
router.put("/:bookId", Updatebook);
router.delete("/:bookId", deletebook);


export default router;
