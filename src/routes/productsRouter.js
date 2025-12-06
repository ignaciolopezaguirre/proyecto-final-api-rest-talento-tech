import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import { autenticar } from "../middleware/autenticacionToken.js";

const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products/create", autenticar, createProduct);
router.delete("/products/:id", deleteProduct);

export default router;
