
const MessageController = (Message) => {
  return {
    getAllMessages: ( async (req, res, next) => {
      const messages = await Message.findAll();
      res.json({
        messages: messages
      });
    }),

    saveMessage: ( async (req, res, next) => {
      try {
        let message = await Message.create(req.body);
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
