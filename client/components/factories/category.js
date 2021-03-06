(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Category', ['$http', function($http){

    function create(name){
      return $http.post('/categories', {name:name});
    }

    function findAll(){
      return $http.get('/categories');
    }

    return {create:create, findAll:findAll};
  }]);
})();

