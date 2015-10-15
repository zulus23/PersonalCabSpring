/**
 * Created by Gukov on 09.09.2015.
 */
(function(){
    angular.module('app')
        .controller('LoginController',LoginController);

        function LoginController($rootScope, $scope, $http, $state,auth){
              var vm = this;
              vm.credentials = {};
              vm.login = login;

           // commonService.authenticate();


              function login(){
                  auth.authenticate(vm.credentials, function(authenticated) {
                      if (authenticated) {
                          console.log("Login succeeded")
                          vm.error = false;
                      } else {
                          console.log("Login failed")
                          vm.error = true;
                      }
                  });
              }

        }

})()