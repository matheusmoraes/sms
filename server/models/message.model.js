const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = Schema({
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
