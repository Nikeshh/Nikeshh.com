const mongoose = require('mongoose');
const shortid = require('shortid');

const likesSchema = new mongoose.Schema({
    likesId: {
        type: String,
        default: shortid.generate
    },
});

const Likes = mongoose.model('Likes', likesSchema);
module.exports = Likes;