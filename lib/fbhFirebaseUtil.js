import angular from 'angular';
import 'angularfire';
import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import {fbhFirebaseRefProviderModule} from './fbhFirebaseRef/fbhFirebaseRef.provider';
import {fbhFirebaseCurrentUserModule} from './fbhFirebaseRef/fbhFirebaseCurrentUser.provider';

let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  'firebase',
  fbhFirebaseAuthenticationModule.name,
  fbhFirebaseRefProviderModule.name,
  fbhFirebaseCurrentUserModule.name
]);

export default fbhFirebaseUtil;
