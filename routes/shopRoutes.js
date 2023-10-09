const express = require('express');
const shopController = require('../controllers/shopControllers');
const shopRoutes = express.Router();

// Get all products
shopRoutes.get('/shop', shopController.getProducts);

// Create a new product
shopRoutes.post('/shop', shopController.createProduct);

// Get a product by ID
shopRoutes.get('/shop/:productId', shopController.getProductById);

module.exports = { shopRoutes };
