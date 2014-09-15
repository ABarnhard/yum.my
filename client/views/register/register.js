/* global toastr:true */

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Register';
    $scope.user = {};

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };

    function success(res){
      toastr.success('You Just Successfully Registered!!');
      $location.path('/login');
    }

    function failure(res){
      toastr.error('Hey there Jackwagon, try a different email...');
      $scope.user = {};
    }

  }]);
})();
