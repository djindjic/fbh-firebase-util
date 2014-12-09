import template from './firebaseAuthentication.template.html!text';
import angular from 'angular';
import 'angularfire';

// import {firebaseAuthenticationControllerModule} from './firebaseAuthentication.controller';
// import {firebaseLoginDirectiveModule} from './firebaseLogin/firebaseLogin.directive';
// import {firebaseLogoutDirectiveModule} from './firebaseLogout/firebaseLogout.directive';

let firebaseAuthenticationModule = angular.module('firebaseAuthenticationModule', [
  'firebase'
  // firebaseAuthenticationControllerModule.name,
  // firebaseLoginDirectiveModule.name,
  // firebaseLogoutDirectiveModule.name
]);

firebaseAuthenticationModule.directive('firebaseAuthenticationDirective', ['fbsAuth', function(fbsAuth) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
    },
    // controller: 'AuthenticationController',
    // controllerAs: 'fbsAuthCtrl',
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
    // bindToController: true,
    // templateUrl: 'fbsAuth.template.html'
  }
}]);

firebaseAuthenticationModule.provider('fbsAuth', function() {
  this.appName = null;

  this.setAppName = function(name) {
    this.appName = name;
  };

  this.$get = ['$firebaseAuth', '$window', function ($firebaseAuth, $window) {
    var ref = new $window.Firebase("https://" + this.appName + ".firebaseio.com/");
    return $firebaseAuth(ref);
  }];
});

export default firebaseAuthenticationModule;