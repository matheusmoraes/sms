const sinon = require('sinon');
const chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var Message = require('../../models/message.model');

describe('Message', () => {
  it('should be invalid if content is empty', (done) => {
    let msg = new Message();
    msg.validate(function(err) {
      expect(err.errors.content).to.exist;
      done();
    });
  })
});
