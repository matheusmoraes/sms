import templateUrl from './sms-form.html';

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

    validateNewMessage() {
      if (!this.newMessage || this.newMessage.length == 0) {
        this.isNewMessageValid = false;
      } else {
        this.isNewMessageValid = true;
      }
    }

    onSubmit() {
      this.onAddMessage(
        this.EventEmitter({
          content: this.newMessage
        })
      );
    }
  },
};
