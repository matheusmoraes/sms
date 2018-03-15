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

MessageSchema.statics.findAll = function() {
  return this.find({});
};

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
