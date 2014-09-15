/* global toastr:true */

(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Login';
    $scope.user = {};

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };

    function success(res){
      toastr.success('You Just Successfully Logged In!!');
      $location.path('/');
    }

    function failure(res){
      toastr.error('Hey there Jackwagon, try something else...');
      $scope.user = {};
    }

  }]);
})();
