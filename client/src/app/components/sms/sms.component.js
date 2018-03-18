import templateUrl from './sms.html';


export const SMSComponent = {
  templateUrl,
  controller: class SMSComponent {
    constructor(SMSService) {
      'ngInject';
      this.smsService = SMSService;
    }

    $onInit() {
      this.smsData = [];
      this.isLoading = true;
      this.newMessage = null;

      this.smsService.getSMSs().then(response =>  {
        this.smsData = response.messages
        this.isLoading = false;
      });
    }

    addMessage( { content } ) {
      this.isLoading = true;

      this.smsService.addSMS({ content: content }).then(response => {
        this.smsData.push(response.message)
        this.isLoading = false;
        this.newMessage = null;
      });
    }
  }
}
