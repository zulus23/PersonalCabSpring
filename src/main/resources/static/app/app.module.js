/**
 * Created by Gukov on 08.09.2015.
 */

(function(){
    'use strict'

   angular.module('app',['ngRoute'])
       .config(function($routeProvider,$httpProvider){
          $routeProvider.when('/',{
             templateUrl:'/app/session/session.tmpl.html',
             controller:'HomeController',
             controllerAs:'home1'


          }).when('/login',{
             templateUrl:'/app/login/login.html',
             controller:'LoginController',
             controllerAs:'login'
          }).otherwise('/');
           $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
       })
})()
