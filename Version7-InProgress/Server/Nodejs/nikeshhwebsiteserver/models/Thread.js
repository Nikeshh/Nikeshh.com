const mongoose = require('mongoose');
const shortid = require('shortid');

const threadSchema = new mongoose.Schema({
    threadId: {
        type: String,
        default: shortid.generate
    },
});

const Thread = mongoose.model('Thread', threadSchema);
module.exports = Thread;