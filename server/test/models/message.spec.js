const chai = require('chai');
const expect = chai.expect;
const Message = require('../../models/message');

describe('Message', () => {
  it('should be invalid if content is empty', (done) => {
    let msg = new Message();
    msg.validate(function(err) {
      expect(err.errors.content).to.exist;
      done();
    });
  });
});
