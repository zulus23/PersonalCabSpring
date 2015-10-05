/**
 * Created by Gukov on 02.10.2015.
 */

( function() {
    angular.module('app').service('commonService', commonService);
    commonService.$inject = ['$http'];
    function commonService($http){


         var currUser = {
             authenticated : false
         };
         return {
             authenticate : authenticate,
             currentUser : currentUser


         }

        function currentUser(callback){
            getcurrentUser(callback);

        }

         function getcurrentUser(callback){

                 $http.get('user').success(function(data){
                     currUser.authenticated = true;
                     console.log( " Из запроса user :"+currUser.authenticated);
                     callback && callback(currUser);
                 }).error(function(err){
                     currUser.authenticated = false;
                     callback && callback(currUser);
                 });

         }
         function  authenticate(credentials,callback){

               var headers = credentials ? {
                   authorization : "Basic "
                   + btoa(credentials.username + ":"
                       + credentials.password)
               } : {};
               $http.get('user', {
                   headers : headers
               }).then(function(response) {

                   if (response.data.name) {
                       currUser.authenticated = true;

                   } else {
                       currUser.authenticated = false;
                   }
                   callback && callback(currUser.authenticated);
               },function() {
                   currUser.authenticated = false;
                   callback && callback(false);
               });

       }



    }
})()