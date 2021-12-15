const mongoose = require('mongoose');
Schema = mongoose.Schema;
const ScratchSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Accounts',
  },
});

module.exports = mongoose.model('Scratch', ScratchSchema);
