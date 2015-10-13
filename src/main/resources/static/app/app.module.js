/**
 * Created by Gukov on 08.09.2015.
 */

(function(){
    'use strict'

   angular.module('app',['ui.router'])
       .config(['$urlRouterProvider','$httpProvider','$stateProvider',function($urlRouterProvider,$httpProvider,$stateProvider){
           $urlRouterProvider.otherwise("/");
           $stateProvider.state("home",{
               url:"/",
               templateUrl:'/app/session/session.tmpl.html'
           }).state("login",{
               url:"/login",
               templateUrl:'/app/login/login.html'
           });


           $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
           $httpProvider.interceptors.push('APIInterceptor');
       }]).service('APIInterceptor',function($rootScope){
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
