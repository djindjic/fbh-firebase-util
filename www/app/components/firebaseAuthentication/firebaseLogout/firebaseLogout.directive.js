import angular from 'angular';

export let firebaseLogoutDirectiveModule = angular.module('firebaseLogoutDirectiveModule', [])
.directive('firebaseLogout', function() {
  return {
    require: '^firebaseAuthentication',
    link: function(scope, element, attrs, firebaseAuthenticationCtrl) {
      element.bind('click', function() {
      	firebaseAuthenticationCtrl.logout();
      });
    }
  }
})