const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();

// Get all products
shopRoutes.get('/', shopController.getProducts);

// Create a new product
shopRoutes.post('/', shopController.createProduct);

// Get a product by ID
shopRoutes.get('/:productId', shopController.getProductById);

module.exports = { shopRoutes };
