const mongoose = require('mongoose');
const shortid = require('shortid');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: shortid.generate
    },
    username: {
        type: String,
        required: [true, 'Please provide your username'],
        unique: true,
        trim: true
    },
    fullname: {
        type: String,
        required: [true, 'Please provide your username'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        trim: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
});