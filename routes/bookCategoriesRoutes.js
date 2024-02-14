import { Router } from "express";
import {
  getNewReleases,
  getComingSoon,
  getBestSellers,
  getFreeBooks,
} from "../controllers/bookCategoriesController.js";

const router = Router();
//  routes for book categories
router.get("/newReleases", getNewReleases);
router.get("/comingSoon", getComingSoon);
router.get("/bestSellers", getBestSellers);
router.get("/freeBooks", getFreeBooks);

export default router;
