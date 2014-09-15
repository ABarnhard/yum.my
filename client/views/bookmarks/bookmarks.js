/* global toastr:true */

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', '$location', 'Category', function($scope, $location, Category){

    Category.findAll().then(function(res){
      $scope.categories = res.data.categories;
    }, catError);

    $scope.addCategory = function(){
      Category.create($scope.name).then(catSuccess, catError);
    };

    function catSuccess(res){
      $scope.categories = $scope.categories || [];
      $scope.categories.push(res.data.category);
    }

    function catError(res){
      toastr.error('Hey there Jackwagon, try logging in first...');
      $location.path('/login');
    }

  }]);
})();

