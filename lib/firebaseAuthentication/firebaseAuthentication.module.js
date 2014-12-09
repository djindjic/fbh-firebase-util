import template from './firebaseAuthentication.template.html!text';
import angular from 'angular';
import 'angularfire';

export let fbhFirebaseAuthenticationModule = angular.module('fbhFirebaseAuthenticationModule', [
  'firebase'
]);

fbhFirebaseAuthenticationModule.directive('fbhFirebaseAuthenticationDirective', ['fbhFirebaseAuthentication', function(fbhFirebaseAuthentication) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
    },
    link: function(scope, element, attrs, ctrl, transclude) {
      fbhFirebaseAuthentication.$onAuth(function(authData) {
        scope.user = authData;
      });

      scope.login = function() {
        fbhFirebaseAuthentication.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed: ", error);
        });
      };

      scope.logout = function() {
        fbhFirebaseAuthentication.$unauth();
        console.log("Logged out");
      }

      transclude(scope, function(clone, scope) {
        element.append(clone);
      });
    }
  }
}]);

fbhFirebaseAuthenticationModule.provider('fbhFirebaseAuthentication', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ['$firebaseAuth', '$window', function ($firebaseAuth, $window) {
    var ref = new $window.Firebase("https://" + this.appName + ".firebaseio.com/");
    return $firebaseAuth(ref);
  }];
});