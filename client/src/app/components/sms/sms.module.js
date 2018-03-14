import uiRouter from 'angular-ui-router';
import { SMSService } from './sms.service';
import { SMSFormModule } from './sms-form/sms-form.module';
import { SMSComponent } from './sms.component';

export const sms = angular
  .module('components.sms', [
    uiRouter,
  ])
  .component('sms', SMSComponent)
  .service('SMSService', SMSService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $stateProvider
      .state('form', {
        url:'/',
        component: 'sms'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
