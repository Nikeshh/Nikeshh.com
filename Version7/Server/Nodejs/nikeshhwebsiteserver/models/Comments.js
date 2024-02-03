const mongoose = require('mongoose');
const shortid = require('shortid');

const commentsSchema = new mongoose.Schema({
    commentsId: {
        type: String,
        default: shortid.generate
    },
    _id: ObjectId,
    BlogId: String, // Reference to blogs
    PostTime: Date.now,
    Text: String,
    Author: {
        UserId: ObjectId,
        ProfilePic: String,
        Name: String
    },
    nLikes: Number,
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;