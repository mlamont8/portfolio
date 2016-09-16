'use strict';

/**
 * @ngdoc function
 * @name angularPortfolioApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angularPortfolioApp
 */
angular.module('angularPortfolioApp')
  .controller('navController', ['$scope', function ($scope) {
    $scope.isCollapsed = false;
  }]);
