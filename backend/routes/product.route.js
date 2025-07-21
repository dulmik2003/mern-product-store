import express from "express";
import { createProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;
