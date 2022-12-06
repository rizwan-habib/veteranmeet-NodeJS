const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    multimedia:
    {
        
        type: String
    }

})

module.exports = mongoose.model('Post', Post)