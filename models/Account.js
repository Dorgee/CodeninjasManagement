const mongoose = require('mongoose');
Schema = mongoose.Schema;

const AccountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  roblox: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Robloxs',
    },
  ],
  scratch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Scratch',
    },
  ],
});

module.exports = mongoose.model('Accounts', AccountSchema);
