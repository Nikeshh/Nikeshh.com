const mongoose = require('mongoose');
const shortid = require('shortid');

const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        default: shortid.generate
    },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;