import angular from 'angular';

export let fbhFirebaseCurrentUserModule = angular.module('fbhFirebaseCurrentUserModule', []);

fbhFirebaseCurrentUserModule.provider('fbhFirebaseCurrenUser', function() {
  let that = this;
  that.currentUser = null;
 
  this.$get = ['Firebase', '$firebase', 'fbhFirebaseRef', '$firebaseAuth', function (FirebaseObj, $firebase, fbhFirebaseRef, $firebaseAuth) {
    return {
      getCurrentUser: function(path, factoryConfig) {
        let auth = $firebaseAuth(fbhFirebaseRef.ref());
        return auth.$waitForAuth();
        //return that.currentUser;
      },
      setCurrentUser: function(name) {
        return that.currentUser = name;
      }
    };
  }];
});