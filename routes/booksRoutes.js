
import { Router } from "express";
// import BlogValidation from "../validation/validator.js"
// import { isAdmin } from "../middleware/admin.js";

const router = Router();
// const { verifyCreate } = BlogValidation;
import {
  getAllBooks,
  getSingleBook,
  createbook,
  Updatebook,
  deletebook,
} from "../controllers/booksController.js";

router.get("/", getAllBooks);

router.post("/", createbook);
router.get("/:bookId", getSingleBook);
router.put("/:bookId", Updatebook);
router.delete("/:bookId", deletebook);
export default router;
