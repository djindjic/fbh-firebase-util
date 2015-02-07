import angular from 'angular';
import 'angularfire';
import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import {fbhFirebaseRefProviderModule} from './fbhFirebaseRef/fbhFirebaseRef.provider';
import {fbhFirebaseCurrenUserModule} from './fbhFirebaseRef/fbhFirebaseCurrenUser.provider';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  'firebase',
  fbhFirebaseAuthenticationModule.name,
  fbhFirebaseRefProviderModule.name,
  fbhFirebaseCurrenUserModule.name
]);

export default fbhFirebaseUtil;