const mongoose = require('mongoose');
const shortid = require('shortid');

const blogSchema = new mongoose.Schema({
    blogId: {
        type: String,
        default: shortid.generate
    },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;