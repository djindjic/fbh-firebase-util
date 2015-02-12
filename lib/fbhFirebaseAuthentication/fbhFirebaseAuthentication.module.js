import angular from 'angular';

import {fbhFirebaseAuthenticationControllerModule} from './fbhFirebaseAuthentication.controller';
import {fbhFirebaseAuthenticationDirectiveModule} from './fbhFirebaseAuthentication.directive';
import {fbhFirebaseCurrentUserModule} from './fbhFirebaseCurrentUser.service';
import {firebaseLoginDirectiveModule} from './fbhFirebaseLogin/fbhFirebaseLogin.directive';
import {firebaseLogoutDirectiveModule} from './fbhFirebaseLogout/fbhFirebaseLogout.directive';

export let fbhFirebaseAuthenticationModule = angular.module('fbhFirebaseAuthenticationModule', [
  fbhFirebaseAuthenticationControllerModule.name,
  fbhFirebaseAuthenticationDirectiveModule.name,
  firebaseLoginDirectiveModule.name,
  firebaseLogoutDirectiveModule.name,
  fbhFirebaseCurrentUserModule.name
]);
