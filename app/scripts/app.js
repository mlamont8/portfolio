'use strict';

/**
 * @ngdoc overview
 * @name angularPortfolioApp
 * @description
 * # angularPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('angularPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($locationProvider,$stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        views: {
            '': {templateUrl: '/views/main.html'},
            'nav@home': {templateUrl: 'views/nav.html'},
            'header@home': {templateUrl: 'views/header.html',
                           controller: 'headerController as headerList'},
            'about@home': {templateUrl: 'views/about.html'},
            'skills@home': {templateUrl: 'views/skills.html',
                           controller: 'skillsController as skillsList'},
            'projects@home': {templateUrl: 'views/projects.html',
                             controller:'projectsController as projectsList'},
            'contact@home': {templateUrl: 'views/contact.html'}
        }
    });
  });
/*.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 50) {
                 scope.boolChangeClass = true;
             } else {
                 scope.boolChangeClass = false;
             }
            scope.$apply();
        });
    };
}); */


