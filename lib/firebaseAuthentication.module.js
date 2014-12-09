import template from './firebaseAuthentication.template.html!text';
import angular from 'angular';

// import {firebaseLoginDirectiveModule} from './firebaseLogin/firebaseLogin.directive';
// import {firebaseLogoutDirectiveModule} from './firebaseLogout/firebaseLogout.directive';

export let firebaseAuthenticationModule = angular.module('firebaseAuthenticationModule', []);

firebaseAuthenticationModule.directive('firebaseAuthenticationDirective', ['fbsAuth', function(fbsAuth) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
    },
    link: function(scope, element, attrs, ctrl, transclude) {
      fbsAuth.$onAuth(function(authData) {
        scope.user = authData;
      });

      scope.login = function() {
        fbsAuth.$authWithOAuthPopup("facebook").then(function(authData) {
          console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
          console.error("Authentication failed: ", error);
        });
      };

      scope.logout = function() {
        fbsAuth.$unauth();
        console.log("Logged out");
      }

      transclude(scope, function(clone, scope) {
        element.append(clone);
      });
    }
  }
}]);

firebaseAuthenticationModule.provider('fbsAuth', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ["$firebaseAuth", function ($firebaseAuth) {
    var ref = new Firebase("https://" + this.appName + ".firebaseio.com/");
    return $firebaseAuth(ref);
  }];
});