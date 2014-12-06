import angular from 'angular';
import 'angularfire';
import {firebaseAuthenticationDirectiveModule} from './components/firebaseAuthentication/firebaseAuthentication.directive';
import {firebaseAuthentificationConfigModule} from './config/firebaseAuthentification.config'

export let mainModule = angular.module('my-fb-login', [
  'firebase',
  firebaseAuthentificationConfigModule.name,
  firebaseAuthenticationDirectiveModule.name
]);