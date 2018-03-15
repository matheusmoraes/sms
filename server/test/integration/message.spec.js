const expect = require('chai').expect;
const app = require('./../../app');
const request = require('supertest-as-promised')(app);
const Message = require('../../models/message');

describe('Messages API', () => {
  describe('get all messages', () => {
    let response;
    let content = 'Oi gata quer tc';

    before(async () => {
      const msg = await Message.create({ content });
      response = await request.get('/api/messages');
    });

    it('should return status 200', () => {
      expect(response.statusCode).to.be.equal(200);
    });

    it('should contain body with one message', () => {
      expect(response.body.messages).to.be.an('array');
      expect(response.body.messages).to.have.lengthOf(1);
    });

    it('should contain body with content', () => {
      expect(response.body.messages[0]).to.include({ content })
    });
    
  });

  describe('save new message', () => {

    describe('when message is invalid', () => {
      it('should not return a message', async () => {
        
      });

      it('should return status code 422', async () => {

      });
    })

  });
});
