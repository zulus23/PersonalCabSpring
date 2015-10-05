/**
 * Created by Gukov on 08.09.2015.
 */

(function(){
    'use strict'

   angular.module('app',['ngRoute'])
       .config(function($routeProvider,$httpProvider){
          $routeProvider.when('/',{
             templateUrl:'/app/session/session.tmpl.html'
          }).when('/login',{
             templateUrl:'/app/login/login.html'
          }).otherwise('/');
           $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
           $httpProvider.interceptors.push('APIInterceptor');
       }).service('APIInterceptor',function($rootScope){
           var service = this;
           service.request = function(config){
                return config;
           };

           service.responseError = function(response){
                if(response.status ===  401){
                    $rootScope.$broadcast('unauthorized');
                }
               return response;
           }
       }).run( function(commonService){
            console.log("commonService "+commonService.currentUser);
           // commonService.currentUser();
    });



})()
