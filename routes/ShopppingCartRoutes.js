import { Router } from "express";
import CartValidation from "../validations/cartValidations.js";
import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} from "../controllers/cartController.js";

const router = Router();
const { verifyAdd } = CartValidation;

router.get("/cart", getCart);
router.post("/cart", verifyAdd, addToCart);
router.put("/cart/:itemId", updateCart);
router.delete("/cart/:itemId", removeFromCart);

export default router;
