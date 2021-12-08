const mongoose = require('mongoose');

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
  roblox: {
    type: this.schema.Types.ObjectId, ref:'Robloxs'
  },
  scratch:{
    type: this.schema.Types.ObjectId, ref: 'Scratch'
  }
});

module.exports = mongoose.model('Accounts', AccountSchema);
