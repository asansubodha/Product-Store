import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Sample GET route to check if the server is running
router.get('/', getProducts);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;