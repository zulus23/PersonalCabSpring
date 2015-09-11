/**
 * Created by Gukov on 09.09.2015.
 */
(function(){
    angular.module('app')
        .controller('LoginController',LoginController);

        function LoginController($rootScope, $scope, $http, $location, $route){
              var vm = this;
              vm.credentials = {};
              vm.login = login;

              authenticate();

              function  authenticate(credentials,callback){
                  var headers = credentials ? {
                      authorization : "Basic "
                      + btoa(credentials.username + ":"
                          + credentials.password)
                  } : {};
                  console.log(headers);
                  $http.get('user', {
                      headers : headers
                  }).success(function(data) {
                      if (data.name) {
                          $rootScope.authenticated = true;
                      } else {
                          $rootScope.authenticated = false;
                      }
                      callback && callback($rootScope.authenticated);
                  }).error(function() {
                      $rootScope.authenticated = false;
                      callback && callback(false);
                  });
              };
              function login(){
                  authenticate(vm.credentials, function(authenticated) {
                      console.log(vm.credentials);
                      if (authenticated) {
                          console.log("Login succeeded")
                          $location.path("/");
                          $scope.error = false;
                          $rootScope.authenticated = true;
                      } else {
                          console.log("Login failed")
                          $location.path("/login");
                          $scope.error = true;
                          $rootScope.authenticated = false;
                      }
                  })
              }

        }

})()