import {fbhFirebaseAuthenticationModule} from './fbhFirebaseAuthentication/fbhFirebaseAuthentication.module';
import angular from 'angular';

export let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  fbhFirebaseAuthenticationModule.name,
]);