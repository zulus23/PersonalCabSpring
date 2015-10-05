/**
 * Created by Gukov on 09.09.2015.
 */
/**
 * Created by Gukov on 08.09.2015.
 */
(function(){
    angular.module('app')
        .controller('HomeController',HomeController);


    function HomeController($http,$rootScope,$location,commonService){
        var vm = this;
        vm.test = "Привет ";
        vm.gretting = {}
        vm.grettingSpeak = Gretting;
        vm.currentUser = {};
        $rootScope.$on('unauthorized', function() {
                 $location.path('/login');

        });
        commonService.currentUser(function(user){
            vm.currentUser =  user;
        });

        //commonService.authenticate();

        vm.logout = function(){
            $http.post('logout',{}).success(function(data){
                commonService.currentUser.authenticated = false;
                $location.path('/login');
            }).error(function(data){
                commonService.currentUser.authenticated = false;
            })
        }


        Gretting();
        function Gretting() {
            console.log(commonService.currentUser.authenticated);
            $http.get('/testresource/').success(function (data) {
                vm.gretting = data;
            }).error(function (err) {
                console.log(err);
            });
        }
    }

})();