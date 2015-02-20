import angular from 'angular';

export let fbhFirebaseAuthenticationControllerModule = angular.module('fbhFirebaseAuthenticationControllerModule', []);

fbhFirebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$timeout', '$firebaseAuth', 'fbhFirebaseRef', '$rootScope', function($timeout, $firebaseAuth, fbhFirebaseRef, $rootScope) {
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
      $rootScope.$broadcast('rootScope:UserLoggedIn', authData);
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  };

  fbsAuthCtrl.logout = function() {
    auth.$unauth();
    fbsAuthCtrl.authentificated = false;
    $rootScope.$broadcast('rootScope:UserLoggedOut', {});
  }
}]);
