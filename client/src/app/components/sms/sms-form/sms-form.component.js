import templateUrl from './sms-form.html';
import { TextToSMSParser, SMSToTextParser } from './../../../../../../server/models/sms';

export const SMSFormComponent = {
  templateUrl,
  bindings: {
    isLoading: '<',
    newMessage: '<',
    onAddMessage: '&'
  },
  controller: class SMSFormComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    $onInit() {
      this.smsOrTextParser = 'textToSMS'
      this.maxLength = 255;
      this.remainingChars = 255;
      this.parsedMessage = '';
      this.parser = new TextToSMSParser();
    }

    toggleParser() {
      if (this.smsOrTextParser == 'textToSMS') {
        this.parser = new TextToSMSParser();
      } else {
        this.parser = new SMSToTextParser();
      }
      this.toggleInputs();
    }

    toggleInputs() {
      let aux = this.newMessage;
      this.newMessage = this.parsedMessage;
      this.parsedMessage = aux;
    }

    validateNewMessage() {
      if (!this.newMessage || this.newMessage.length == 0) {
        this.isNewMessageValid = false;
      } else {
        this.isNewMessageValid = true;
      }
    }

    parseMessage() {
      this.parsedMessage = this.parser.parse(this.newMessage);
    }

    updateRemainingCharacters() {
      this.remainingChars = this.maxLength - this.newMessage.length;
    }

    onSubmit() {
      this.onAddMessage(
        this.EventEmitter({
          content: this.newMessage
        })
      );
      this.newMessage = '';
      this.parsedMessage = '';
    }
  },
};
