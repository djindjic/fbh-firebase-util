import angular from 'angular';

export let fbhFirebaseCurrentUserModule = angular.module('fbhFirebaseCurrentUserModule', []);

fbhFirebaseCurrentUserModule.service('fbhFirebaseCurrenUserService', ['Firebase', '$firebase', 'fbhFirebaseRef', '$firebaseAuth', '$timeout', function(FirebaseObj, $firebase, fbhFirebaseRef, $firebaseAuth, $timeout) {
  let that = this;

  that.getCurrentUser = function(path, factoryConfig) {
    let auth = $firebaseAuth(fbhFirebaseRef.ref());
    return auth.$waitForAuth();
  };
}]);
