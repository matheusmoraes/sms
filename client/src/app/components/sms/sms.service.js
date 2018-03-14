export class SMSService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
		this.url = 'http://localhost:3000/api/sms';
  }

  getSMSs() {
    console.log('Getting some sms\'s');
    return this.$http.get(this.url)
      .then(response => response.data);
  }

	addSMS({ content }) {
		console.log('Saving sms', content);
		return this.$http.post(this.url, data)
			.then(response => console.log(response));
	}
}
