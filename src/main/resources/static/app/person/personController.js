/**
 * Created by Gukov on 15.10.2015.
 */
(function(){
   'use strict';

   angular.module('person').controller('PersonController',PersonController);

   PersonController.$inject = [];

   function PersonController(){
      var vm = this;
      vm.activate = activate;

      activate();

      ////////////////////////////////////////

      function activate(){

      }

   }

})();