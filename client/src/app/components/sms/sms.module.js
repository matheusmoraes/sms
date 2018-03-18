import uiRouter from 'angular-ui-router';
import { SMSService } from './sms.service';
import { SMSFormModule } from './sms-form/sms-form.module';
import { SMSListModule } from './sms-list/sms-list.module';
import { SMSComponent } from './sms.component';

export const sms = angular
  .module('components.sms', [
    uiRouter,
    SMSFormModule,
    SMSListModule,
  ])
  .component('sms', SMSComponent)
  .service('SMSService', SMSService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('initial', {
        url:'/',
        component: 'sms'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
