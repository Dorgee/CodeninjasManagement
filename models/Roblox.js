const mongoose = require('mogoose');

const RobloxSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Robloxs', RobloxSchema);