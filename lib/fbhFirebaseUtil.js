import angular from 'angular';
import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import {fbhFirebaseRefProviderModule} from './fbhFirebaseRef/fbhFirebaseRef.provider';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  fbhFirebaseAuthenticationModule.name,
  fbhFirebaseRefProviderModule.name
]);

export default fbhFirebaseUtil;