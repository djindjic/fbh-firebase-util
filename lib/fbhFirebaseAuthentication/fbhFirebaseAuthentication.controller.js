import angular from 'angular';

export let fbhFirebaseAuthenticationControllerModule = angular.module('fbhFirebaseAuthenticationControllerModule', []);

fbhFirebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$timeout', '$firebaseAuth', 'fbhFirebaseRef', function($timeout, $firebaseAuth, fbhFirebaseRef) {
  let fbsAuthCtrl = this;
  let auth = $firebaseAuth(fbhFirebaseRef);

  auth.$onAuth(function(authData) {
    $timeout(function() {
      fbsAuthCtrl.user = authData;
      fbhFirebaseRef.child("users").child(authData.uid).set(authData);
    });
  });

  fbsAuthCtrl.login = function() {
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  };

  fbsAuthCtrl.logout = function() {
    auth.$unauth();
    console.log("Logged out");
  }
}]);