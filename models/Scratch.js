const mongoose = require('mogoose');

const ScratchSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Scratch', ScratchSchema);