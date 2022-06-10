const mongoose = require('mongoose');
const shortid = require('shortid');

const likesSchema = new mongoose.Schema({
    likesId: {
        type: String,
        default: shortid.generate
    },
    _id: ObjectId,
    ReferenceId: String, // Reference to blogs or comments
    LikeTime: Date.now,
    Author: {
        UserId: Number,
        ProfilePic: String,
        Name: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Likes = mongoose.model('Likes', likesSchema);
module.exports = Likes;