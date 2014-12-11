import angular from 'angular';
import 'angularfire';

import {fbhFirebaseAuthenticationControllerModule} from './fbhFirebaseAuthentication.controller';
import {fbhFirebaseAuthenticationDirectiveModule} from './fbhFirebaseAuthentication.directive';
import {firebaseLoginDirectiveModule} from './fbhFirebaseLogin/fbhFirebaseLogin.directive';
import {firebaseLogoutDirectiveModule} from './fbhFirebaseLogout/fbhFirebaseLogout.directive';

export let fbhFirebaseAuthenticationModule = angular.module('fbhFirebaseAuthenticationModule', [
  'firebase',
  fbhFirebaseAuthenticationControllerModule.name,
  fbhFirebaseAuthenticationDirectiveModule.name,
  firebaseLoginDirectiveModule.name,
  firebaseLogoutDirectiveModule.name
]);