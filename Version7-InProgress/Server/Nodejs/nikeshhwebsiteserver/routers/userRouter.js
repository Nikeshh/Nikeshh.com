const express = require('express');
const protect = require('../middlewares/protect');
const restrictTo = require('../middlewares/restrictTo');
const userController = require('../controllers/userController');

const router = express.Router();

// Get all users
router
    .route('/')
    .get(protect, restrictTo('admin'), userController.getAllUsers);

// Get a particular user
// Add a new user
// Add a new admin user
// Update a particular user
// Delete a particular user

// Login
// Register
// Forgot Password
// Confirm Activation Link
// Reset Password

module.exports = router;