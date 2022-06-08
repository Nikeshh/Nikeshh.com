const bcrypt = require('bcryptjs/dist/bcrypt');
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
    phonenumber: {
        type: Number,
        required: [true, 'Please tell us your phone number!'],
        trim: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Must be greater than 8'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please provide a password confirm'],
        minlength: [8, 'Must be greater than 8'],
        select: false
    },
    activationLink: {
        type: String,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    activated: {
        type: Boolean,
        default: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

// Encrypt the password and presave it
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        // only run if password is modified
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12); // hashing password
    this.passwordConfirm = undefined; // delete passwordConfirm field
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;