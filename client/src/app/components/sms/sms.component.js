import templateUrl from './sms.html';


export const SMSComponent = {
  templateUrl,
  controller: class SMSComponent {
    constructor(SMSService) {
      'ngInject';
      this.smsService = SMSService;
    }

    $onInit() {
      this.smsService.getSMSs().then(response => this.smss = response);
    }

    addNewMessage( { content } ) {
      console.log('Add new message: ', message);
			this.smsService.addSMS({ content: content });
    }
  }
}
