var app = angular.module('app', []);

app.directive('myAuth', function() {
  return {
    restrict: 'E',
    scope: {
    },
    controller: ['$scope', function($scope) {
      this.login = function(provider) {
        console.log('login');
      };
    }]
  }
});

app.directive('myLogin', function() {
  return {
    restrict: 'A',
    require: '^myAuth',
    link: function(scope, element, attrs, myAuthCtrl) {
      console.log(myAuthCtrl);
      element.bind('click', function() {
        myAuthCtrl.login();
      });
    }
  }
});