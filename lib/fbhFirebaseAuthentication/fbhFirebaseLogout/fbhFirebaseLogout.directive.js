import angular from 'angular';

export let firebaseLogoutDirectiveModule = angular.module('firebaseLogoutDirectiveModule', [])
.directive('fbhFirebaseLogout', function() {
  return {
    require: '^fbhFirebaseAuthenticationDirective',
    link: function(scope, element, attrs, firebaseAuthenticationCtrl) {
      element.bind('click', function() {
      	firebaseAuthenticationCtrl.logout();
      });
    }
  }
})