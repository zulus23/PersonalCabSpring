/**
 * Created by Gukov on 09.09.2015.
 */
(function(){
    angular.module('app')
        .controller('LoginController',LoginController);

        function LoginController($rootScope, $scope, $http, $location, $route,commonService){
              var vm = this;
              vm.credentials = {};
              vm.login = login;

           // commonService.authenticate();


              function login(){
                  commonService.authenticate(vm.credentials, function(authenticated) {
                      console.log(vm.credentials);
                      if (authenticated) {
                          console.log("Login succeeded")
                          $location.path("/");
                          $scope.error = false;
                          commonService.currentUser.authenticated = true;
                      } else {
                          console.log("Login failed")
                          $location.path("/login");
                          $scope.error = true;
                          commonService.currentUser.authenticated = false;
                      }
                  })
              }

        }

})()