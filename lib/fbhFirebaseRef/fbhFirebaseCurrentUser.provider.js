import angular from 'angular';

export let fbhFirebaseCurrenUserModule = angular.module('fbhFirebaseCurrenUserModule', []);

fbhFirebaseCurrenUserModule.provider('fbhFirebaseCurrenUser', function() {
  let that = this;
  that.currentUser = null;

  that.setCurrentUser = function(name) {
    that.currentUser = name;
  };

  this.$get = ['Firebase', '$firebase', function (FirebaseObj, $firebase) {
    return {
      getCurrentUser: function(path, factoryConfig) {
        return that.currentUser
      }
    };
  }];
});