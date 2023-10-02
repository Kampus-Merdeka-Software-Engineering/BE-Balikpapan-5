const express = require('express');
const shopController = require('../controllers/shopController');
const shopRoutes = express.Router();


shopRoutes.get('/', shopController.getItems);


module.exports = { shopRoutes };