const express = require("express");
const productController = require("../controllers/productController");
const productRoutes = express.Router();

// Get all products
productRoutes.get("/product", productController.getAllProduct);

// Create a new product
productRoutes.post("/product", productController.createProduct);

// Get a product by ID
productRoutes.get("/product/:productId", productController.getProductById);

module.exports = { productRoutes };
