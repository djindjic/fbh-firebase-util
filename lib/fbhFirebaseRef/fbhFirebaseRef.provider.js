import angular from 'angular';

export let fbhFirebaseRefProviderModule = angular.module('fbhFirebaseRefProviderModule', []);

fbhFirebaseRefProviderModule.provider('fbhFirebaseRef', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ['$window', function ($window) {
    let ref = new $window.Firebase(`https://${this.appName}.firebaseio.com/`);
    return ref;
  }];
});