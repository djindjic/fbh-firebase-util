import angular from 'angular';

export let firebaseLoginDirectiveModule = angular.module('firebaseLoginDirectiveModule', [])
.directive('fbhFirebaseLogin', function() {
  return {
    require: '^fbhFirebaseAuthenticationDirective',
    link: function(scope, element, attrs, firebaseAuthenticationCtrl) {
      element.bind('click', function() {
      	firebaseAuthenticationCtrl.login();
      });
    }
  }
})