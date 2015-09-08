/**
 * Created by Gukov on 08.09.2015.
 */
(function(){
    angular.module('app')
        .controller('ApplicationController',ApplicationController);

    function ApplicationController($http){
        var vm = this;
        vm.test = "Привет ";

        $http.get('/testresource/').success(function(data){
            vm.gretting = data;
        }).error(function(err){
            console.log(err);
        })

    }

})();