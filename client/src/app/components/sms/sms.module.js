import uiRouter from 'angular-ui-router';
import { SMSComponent } from './sms.component';

export const sms = angular
  .module('components.sms', [
    uiRouter,
  ])
  .component('sms', SMSComponent)
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
