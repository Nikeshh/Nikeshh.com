const mongoose = require('mongoose');
const shortid = require('shortid');

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        default: shortid.generate
    },
    thread: ObjectId,
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: 'Nikeshh Vijayabaskaran'
    },
    post: String,
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;