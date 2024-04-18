const mongoose = require('mongoose');
const shortid = require('shortid');

const blogSchema = new mongoose.Schema({
    blogId: {
        type: String,
        default: shortid.generate
    },
    _id: ObjectId,
    Title: String,
    PostTime: Date.now,
    nLikes: Number,
    NumComments: Number,
    Author: {
        userId: Number,
        ProfilePic: String,
        Name: String
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;