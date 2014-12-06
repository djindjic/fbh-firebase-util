import {firebaseAuthenticationDirectiveModule} from 'app/components/firebaseAuthentication/firebaseAuthentication.directive';

export let firebaseAuthentificationConfigModule = angular.module('firebaseAuthentificationConfigModule', [
  firebaseAuthenticationDirectiveModule.name
]);
//firebase module config
firebaseAuthentificationConfigModule.config(['fbsAuthProvider', function(fbsAuthProvider) {
  fbsAuthProvider.setAppName('my-fb-login');
}]);