/**
 * Created by Gukov on 09.09.2015.
 */
/**
 * Created by Gukov on 08.09.2015.
 */
(function(){
    angular.module('app')
        .controller('HomeController',HomeController);


    function HomeController($http,$rootScope,$state,auth){
        var vm = this;
        vm.test = "Привет ";
        vm.gretting = {}
        vm.grettingSpeak = Gretting;

        vm.authenticated = function() {
            return auth.authenticated;
        }

        //commonService.authenticate();

        vm.logout = auth.clear;


        Gretting();
        function Gretting() {
            console.log(auth.authenticated);
            $http.get('/testresource/').success(function (data) {
                vm.gretting = data;
            }).error(function (err) {
                console.log(err);
            });
        }
    }

})();