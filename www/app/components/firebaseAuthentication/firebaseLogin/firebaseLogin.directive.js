import angular from 'angular';

export let firebaseLoginDirectiveModule = angular.module('firebaseLoginDirectiveModule', [])
.directive('firebaseLogin', function() {
  return {
    require: '^firebaseAuthentication',
    link: function(scope, element, attrs, firebaseAuthenticationCtrl) {
      element.bind('click', function() {
      	firebaseAuthenticationCtrl.login();
      });
    }
  }
})