import angular from 'angular';
import 'angularfire';
import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import {fbhFirebaseRefProviderModule} from './fbhFirebaseRef/fbhFirebaseRef.provider';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  'firebase',
  fbhFirebaseAuthenticationModule.name,
  fbhFirebaseRefProviderModule.name
]);

export default fbhFirebaseUtil;