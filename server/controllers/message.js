const MessageService = require('../services/message');

const MessageController = (Message) => {

  this.messageService = new MessageService(Message);

  return {
    getAllMessages: ( async (req, res, next) => {
      const messages = await this.messageService.getAllMessages();
      res.json({
        messages: messages
      });
    }),

    saveMessage: ( async (req, res, next) => {
      try {
        let message = await this.messageService.createMessage(req.body);
        res.json({ message });
      } catch(e) {
        res.status(422).json({
          errors: [e.message]
        }) 
      }
    }),
  }
}

module.exports = MessageController;
