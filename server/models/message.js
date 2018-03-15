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

MessageSchema.options.toJSON = {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
}

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
