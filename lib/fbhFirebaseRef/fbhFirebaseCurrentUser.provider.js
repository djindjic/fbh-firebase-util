import angular from 'angular';

export let fbhFirebaseCurrentUserModule = angular.module('fbhFirebaseCurrentUserModule', []);

fbhFirebaseCurrentUserModule.provider('fbhFirebaseCurrenUser', function() {
  let that = this;
  that.currentUser = null;
 
  this.$get = ['Firebase', '$firebase', function (FirebaseObj, $firebase) {
    return {
      getCurrentUser: function(path, factoryConfig) {
        return that.currentUser;
      },
      setCurrentUser: function(name) {
        return that.currentUser = name;
      }
    };
  }];
});