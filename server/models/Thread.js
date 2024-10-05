// server/models/Thread.js
const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    addiction: { type: String, required: true },
    replies: { type: Array, default: [] } // To store replies later
});

module.exports = mongoose.model('Thread', threadSchema);
