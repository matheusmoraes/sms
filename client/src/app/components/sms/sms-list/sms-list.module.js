import { SMSListComponent } from './sms-list.component';

export const SMSListModule = angular
  .module('components.sms.sms-list', [])
  .component('smsList', SMSListComponent)
  .name;
