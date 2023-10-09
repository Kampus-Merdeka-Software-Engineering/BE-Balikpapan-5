const express = require('express');
const cartController = require('../controllers/cartController');
const cartRoutes = express.Router();

// get cart
cartRoutes.get('/cart', cartController.getCart);

// add product to cart
cartRoutes.post('/cart', cartController.addProductToCart);

// get product by id 
cartRoutes.get('/product/:productId', cartController.getProductById); // Mengubah '/cart' menjadi '/product/:productId'

module.exports = cartRoutes;
