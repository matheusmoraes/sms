export class SMSService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = API_URL + 'api/messages';
  }

  getSMSs() {
    console.log('Getting some sms\'s');
    return this.$http.get(this.url)
      .then(response => response.data);
  }

	addSMS(content) {
		console.log('Saving sms', content);
		return this.$http.post(this.url, content)
			.then(response => response.data);
	}
}
