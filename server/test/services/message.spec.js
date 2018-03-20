const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
const Message = require('../../models/message');
const MessageService = require('../../services/message');

chai.use(sinonChai);

describe('MessageService', () => {

  let messageService;

  before(() => {
    sinon.spy(Message, 'create');
    sinon.spy(Message, 'findAll');
    messageService = new MessageService(Message);
  })

  beforeEach(() => {
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    this.sandbox.restore();
  })

  it('createMessage should call .create', () => {
    const content = { content: 'Teste' };
    messageService.createMessage(content);
    expect(Message.create).to.have.been.calledWith(content);
  });

  it('getAllMessages should call .findAll', async () => {
    messageService.getAllMessages();
    expect(Message.findAll).to.have.been.called;
  });
});

