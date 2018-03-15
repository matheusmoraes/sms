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
    describe('when the message is invalid', () => {
      let response;
      let newMessage = { content: '' }

      before(async () => {
        response = await request.post('/api/messages').send(newMessage);
      });

      it('should return error message', () => {
        expect(response.body.errors).to.be.an('array');
        expect(response.body.errors).to.have.lengthOf(1);
      });

      it('should return the right error message', () => {
        let errorMessage = response.body.errors[0];
        expect(errorMessage).to.include('required');
      })

      it('should return status code 422', () => {
        expect(response.statusCode).to.be.equal(422);  
      });
    });

    describe('when the message is valid', () => {
      let response;
      let newMessage = { content: 'Ola td bem' };

      before(async () => {
        response = await request.post('/api/messages').send(newMessage);
      });

      it('should return status code 200', () => {
        expect(response.statusCode).to.be.equal(200);
      });

      it('should return created message', () => {
        expect(response.body.message).to.be.an('object');
        expect(response.body.message).to.includes(newMessage);
        expect(response.body.message).to.have
          .keys('id', 'created_at', 'content');
      });
    });
  });
});
