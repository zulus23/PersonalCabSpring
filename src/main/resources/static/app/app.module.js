/**
 * Created by Gukov on 08.09.2015.
 */

(function(){
    'use strict'

   angular.module('app',['ui.router','person','auth'])
       .config(['$urlRouterProvider','$httpProvider','$stateProvider','$locationProvider',
           function($urlRouterProvider,$httpProvider,$stateProvider,$locationProvider){
           $locationProvider.html5Mode(true);
           $urlRouterProvider.otherwise("/");
           $stateProvider.state("home",{
               url:"/",
               templateUrl:'/app/session/session.tmpl.html'
           }).state("login",{
               url:"/login",
               templateUrl:'/app/login/login.html'
           }).state("person",{
               url:"/person",
               templateUrl:'/app/person/person.html'
           });

           $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'

           //$httpProvider.interceptors.push('APIInterceptor');
       }]).run(function(auth){
            auth.init('/', '/login', '/logout');
        });/*.service('APIInterceptor',function($rootScope){
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
       }).run( function(commonService,$rootScope,$state){
            console.log("commonService "+commonService.currentUser);
           // commonService.currentUser();

       });*/



})()
