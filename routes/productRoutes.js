const express = require("express");
const productController = require("../controller/productController");
const productRoutes = express.Router();

// get all products
productRoutes.get("/", productController.getProducts);

// Create a new product
productRoutes.post("/", productController.createProduct);

// Get a product by ID
productRoutes.get("/:productId", productController.getProductById);

module.exports = { productRoutes };
