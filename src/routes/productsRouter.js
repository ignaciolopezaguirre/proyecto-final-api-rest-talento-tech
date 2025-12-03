import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/create", createProduct);
router.delete("/products/:id", deleteProduct);
//router.post("/auth/login");

export default router;
