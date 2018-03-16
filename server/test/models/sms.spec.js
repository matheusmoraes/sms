'use strict'

const TextToSMSParser = require('../../models/sms');
const expect = require('chai').expect;


describe('TextToSMSParser', () => {

  let parser = new TextToSMSParser();

  describe('module', () => {
    it('should export a function', () => {
      expect(TextToSMSParser).to.be.a('function');
    });
  });

  describe('.parse', () => {
    it('should parse the message', () => {
      let message = 'TESTE DE MESA';
      let parsedMessage = parser.parse(message);
      expect(parsedMessage).to.be.equal('833777783303_33063377772');
    });
  });


});
