const mongoose = require('mongoose');
const shortid = require('shortid');

const commentsSchema = new mongoose.Schema({
    commentsId: {
        type: String,
        default: shortid.generate
    },
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;