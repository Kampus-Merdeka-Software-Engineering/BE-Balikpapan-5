const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

// Get all users
userRoutes.get('/user', userController.getUsers);

// Create new user (sign up)
userRoutes.post('/user', userController.newUser);

// Get a user by email (tampilan login)
userRoutes.get('/user/:email', userController.getSpecificUser);

module.exports = { userRoutes };
