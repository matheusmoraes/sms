
const MessageController = (Message) => {
  return {
    getAllMessages: ( async (req, res, next) => {
      const messages = await Message.findAll();
      res.json({
        messages: messages
      });
    }),

    saveMessage: ((req, res, next) => {
      res.json('Topzera irmão');
    }),
  }
}

module.exports = MessageController;
