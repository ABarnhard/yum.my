
(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', '$location', 'Category', 'Bookmark', function($scope, $location, Category, Bookmark){

    $scope.filter = {};

    Category.findAll().then(function(res){
      $scope.categories = res.data.categories;
    });

    Bookmark.findAll().then(function(res){
      $scope.bookmarks = res.data.bookmarks;
    });

    $scope.addCategory = function(){
      Category.create($scope.name).then(function(res){
        $scope.categories = $scope.categories || [];
        $scope.categories.push(res.data.category);
        $scope.name = '';
      });
    };

    $scope.createBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(res){
        $scope.bookmarks.push(res.data.bookmark);
        $scope.bookmark = {};
      });
    };

    $scope.setFilter = function(category){
      if(!category){
        $scope.filter = {};
      }else{
        $scope.filter.category = category;
      }
    };

  }]);
})();

