import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import angular from 'angular';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  fbhFirebaseAuthenticationModule.name,
]);

export default fbhFirebaseUtil;