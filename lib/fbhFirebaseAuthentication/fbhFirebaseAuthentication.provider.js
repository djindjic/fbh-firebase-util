import angular from 'angular';

export let fbhFirebaseAuthenticationProviderModule = angular.module('fbhFirebaseAuthenticationProviderModule', []);

fbhFirebaseAuthenticationProviderModule.provider('fbhFirebaseAuthentication', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ['$firebaseAuth', '$window', function ($firebaseAuth, $window) {
    var ref = new $window.Firebase("https://" + this.appName + ".firebaseio.com/");
    return $firebaseAuth(ref);
  }];
});