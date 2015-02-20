import angular from 'angular';

export let fbhFirebaseAuthenticationDirectiveModule = angular.module('fbhFirebaseAuthenticationDirectiveModule', []);

fbhFirebaseAuthenticationDirectiveModule.directive('fbhFirebaseAuthenticationDirective', [function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: 'FirebaseAuthenticationController',
    controllerAs: 'fbsAuthCtrl',
    bindToController: true,
    link: function(scope, element, attrs, ctrl, transclude) {
      transclude(scope, function(clone, scope) {
        element.append(clone);
      });
    }
  }
}]);
