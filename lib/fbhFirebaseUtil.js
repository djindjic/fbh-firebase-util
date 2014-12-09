import {firebaseAuthenticationModule} from './firebaseAuthentication/firebaseAuthentication.module';
import angular from 'angular';

export let fbhFirebaseUtil = angular.module('fbhFirebaseUtil', [
  firebaseAuthenticationModule.name,
]);