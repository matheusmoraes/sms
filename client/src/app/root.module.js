import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { rootComponent } from './root.component';
import { components } from './components/components.module';
import 'bulma/bulma.sass';


export const root = angular
  .module('root', [
    uiRouter,
    components,
  ])
  .component('root', rootComponent)
  .name;
