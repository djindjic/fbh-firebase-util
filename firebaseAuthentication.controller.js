import angular from 'angular';

export let firebaseAuthenticationControllerModule = angular.module('firebaseAuthenticationControllerModule', []);

firebaseAuthenticationControllerModule.controller('FirebaseAuthenticationController', ['$rootScope', '$firebaseAuth', function($rootScope, $firebaseAuth) {

  let fbsAuth = this;

  fbsAuth.auth().$onAuth(function(authData) {
    $rootScope.user = authData;
    if (authData) {
      //fbsAuth.auth().child('users').child(authData.uid).set(authData);
      console.log("Logged in as:", authData.uid);
    } else {
      //  window.cookies.clear(function() {
      //   console.log("Cookies cleared!");
      // });
      console.log("user is logged out");
    }
  });

  // Logs a user in with inputted provider
  fbsAuth.login = function() {
    fbsAuth.auth().$authWithOAuthPopup("facebook").then(function(authData) {
      // console.log("Logged in as:", authData.uid);
      // $rootScope.user = authData;
    }).catch(function(error) {
      console.error("Authentication failed: ", error);
    });
  };
  fbsAuth.logout = function() {
    fbsAuth.auth().$unauth();
  };
}]);