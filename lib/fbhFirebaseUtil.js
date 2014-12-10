import angular from 'angular';
import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  fbhFirebaseAuthenticationModule.name,
]);

export default fbhFirebaseUtil;