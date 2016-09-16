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
    'ngTouch',
    'smoothScroll',
    'ui.bootstrap'
  ])
  .config(function ($locationProvider,$stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        views: {
            '': {templateUrl: '/views/main.html'},
            'nav@home': {templateUrl: 'views/nav.html',
                          controller: 'navController as navList'},
            'header@home': {templateUrl: 'views/header.html',
                           controller: 'headerController as headerList'},

            'about@home': {templateUrl: 'views/about.html'},

            'projects@home': {templateUrl: 'views/projects.html',
                             controller:'projectsController as projectsList'},

            'contact@home': {templateUrl: 'views/contact.html'}
        }
    });
  });


