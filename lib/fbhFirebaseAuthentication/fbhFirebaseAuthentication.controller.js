import angular from 'angular';

export let fbhFirebaseAuthenticationControllerModule = angular.module('fbhFirebaseAuthenticationControllerModule', []);

fbhFirebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$timeout', '$firebaseAuth', 'fbhFirebaseRef', 'fbhFirebaseCurrenUser', function($timeout, $firebaseAuth, fbhFirebaseRef, fbhFirebaseCurrenUser) {
  let fbsAuthCtrl = this;
  let auth = $firebaseAuth(fbhFirebaseRef.ref());

  fbsAuthCtrl.authentificated = false;

  auth.$onAuth(function(authData) {
    $timeout(function() {
      fbsAuthCtrl.user = authData;
      if(authData) {
        fbsAuthCtrl.authentificated = true;
        fbhFirebaseCurrenUser.setCurrentUser(authData.facebook.displayName);
        fbhFirebaseRef.ref('users').child(authData.uid).set(authData);
      }
    });
  });

  fbsAuthCtrl.login = function() {
    auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log("Logged in as:", authData.uid);
      fbhFirebaseCurrenUser.setCurrentUser(authData.facebook.displayName);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  };

  fbsAuthCtrl.logout = function() {
    auth.$unauth();
    fbsAuthCtrl.authentificated = false;
    console.log("Logged out");
    fbhFirebaseCurrenUser.setCurrentUser(null);
  }
}]);