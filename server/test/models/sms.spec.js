'use strict'

const TextToSMSParser = require('../../models/sms').TextToSMSParser;
const SMSToTextParser = require('../../models/sms').SMSToTextParser;
const expect = require('chai').expect;


describe('TextToSMSParser', () => {

  let parser = new TextToSMSParser();

  describe('module', () => {
    it('should export a function', () => {
      expect(TextToSMSParser).to.be.a('function');
    });
  });

  describe('.parse', () => {
    it('should parse the message "TESTE DE MESA"', () => {
      let message = 'TESTE DE MESA';
      let parsedMessage = parser.parse(message);
      expect(parsedMessage).to.be.equal('833777783303_33063377772');
    });

    it('should parse the message "haters gonna hate"', () => {
      let message = 'haters gonna hate';
      let parsedMessage = parser.parse(message);
      expect(parsedMessage).to.be.equal('442833777_777704666_66_6620442833');
    });

    it('should .findKeyForChar', () => {
      expect(parser.findKeyForChar('r')).to.be.equal('pqrs');
    });

    it('should .addPrefixIfNeeded', () => {
      parser.result = []
      parser.lastChar = 3;
      parser.addPrefixIfNeeded(3);
      expect(parser.result).to.contains('_');
    });

    it('.shouldAddPrefix', () => {
      parser.lastChar = 3;
      expect(parser.shouldAddPrefix(3, 3)).to.be.true;
    });

    it('should .addParsedChar', () => {
      parser.result = [];
      parser.addParsedChar('3', 3);
      expect(parser.result).to.eql(['333']);
    });

    it('should .multiplyChar', () => {
      expect(parser.multiplyChar('a', 3)).to.be.equal('aaa');
    });
  });

});

describe('SMSToTextParser', () => {
  let parser = new SMSToTextParser();

  describe('module', () => {
    it('should export a function', () => {
      expect(SMSToTextParser).to.be.a('function');
    });
  });

  describe('.parse', () => {

    it('should parse the SMS "833777783303_33063377772"', () => {
      let sms = '833777783303_33063377772';
      let parsed = parser.parse(sms);
      expect(parsed).to.be.equal('teste de mesa');
    });


    it('should parse the SMS "2266682"', () => {
      let sms = '2266682';
      let parsed = parser.parse(sms);

      expect(parsed).to.be.equal('bota');
    });

    it('should parse the SMS "3344482076667772"', () => {
      let sms = '3344482076667772';
      let parsed = parser.parse(sms);

      expect(parsed).to.be.equal('eita pora');
    });

  });
});
