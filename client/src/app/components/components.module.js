import angular from 'angular';
import { sms } from './sms/sms.module';

export const components = angular
  .module('components', [
    sms,
  ])
  .name;
