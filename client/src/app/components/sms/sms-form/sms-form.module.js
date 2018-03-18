import { SMSFormComponent } from './sms-form.component';

export const SMSFormModule = angular
  .module('components.sms.sms-form', [])
  .component('smsForm', SMSFormComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;
