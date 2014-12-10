import angular from 'angular';

export let fbhFirebaseAuthenticationControllerModule = angular.module('fbhFirebaseAuthenticationControllerModule', []);

fbhFirebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$timeout', '$firebaseAuth', 'fbhFirebaseAuthentication', function($timeout, $firebaseAuth, fbhFirebaseAuthentication) {
  let fbsAuthCtrl = this;

  fbhFirebaseAuthentication.$onAuth(function(authData) {
    $timeout(function() {
      fbsAuthCtrl.user = authData;
    });
  });

  fbsAuthCtrl.login = function() {
    fbhFirebaseAuthentication.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  };

  fbsAuthCtrl.logout = function() {
    fbhFirebaseAuthentication.$unauth();
    console.log("Logged out");
  }

}]);