const mongoose = require('mongoose');
const shortid = require('shortid');

const threadSchema = new mongoose.Schema({
    threadId: {
        type: String,
        default: shortid.generate
    },
    title: String,
    postdate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: 'Nikeshh Vijayabaskaran'
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;