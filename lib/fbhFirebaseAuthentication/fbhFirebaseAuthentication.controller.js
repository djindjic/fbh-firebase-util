import angular from 'angular';

export let fbhFirebaseAuthenticationControllerModule = angular.module('fbhFirebaseAuthenticationControllerModule', []);

fbhFirebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$timeout', '$firebaseAuth', 'fbhFirebaseRef', function($timeout, $firebaseAuth, fbhFirebaseRef) {
  let fbsAuthCtrl = this;
  let auth = $firebaseAuth(fbhFirebaseRef.ref());

  fbsAuthCtrl.authentificated = false;

  auth.$onAuth(function(authData) {
    $timeout(function() {
      fbsAuthCtrl.user = authData;
      if(authData) {
        fbsAuthCtrl.authentificated = true;
        fbhFirebaseRef.ref('users').child(authData.uid).set(authData);
      }
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
    fbsAuthCtrl.authentificated = false;
    console.log("Logged out");
  }
}]);
