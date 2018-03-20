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
        this.smsData = response.messages.map(this.formatCreatedAtOfMessage);
        this.isLoading = false;
      });
    }

    addMessage( { content } ) {
      this.isLoading = true;

      this.smsService.addSMS({ content: content }).then(response => {
        let message = this.formatCreatedAtOfMessage(response.message);
        this.smsData.push(message);
        this.isLoading = false;
        this.newMessage = null;
      }).catch(error => {
        this.isLoading = false;
      });
    }

    formatCreatedAtOfMessage(message) {
      let date = new Date(message.created_at);
      message.created_at = date.toLocaleTimeString();
      return message;
    }
  }
}
