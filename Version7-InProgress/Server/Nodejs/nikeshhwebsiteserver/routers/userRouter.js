const express = require('express');
const protect = require('../middlewares/protect');
const restrictTo = require('../middlewares/restrictTo');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .route('/')
    .get(protect, restrictTo('admin'), userController.getAllUsers);

module.exports = router;