
class MessageService {
  constructor(Message) {
    this.message = Message;
  }

  createMessage(content) {
    return this.message.create(content);
  }

  getAllMessages() {
    return this.message.findAll();
  }
}

module.exports = MessageService;
