const Message = require('../models/message.js');
const MessageController = require('../controllers/message')(Message);

const Router = (app) => {
  app.get('/api/messages', MessageController.getAllMessages);
  app.post('/api/messages', MessageController.saveMessage);
};

module.exports = Router;
