import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthenticationModule.module';
import angular from 'angular';

export let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  fbhFirebaseAuthenticationModule.name,
]);