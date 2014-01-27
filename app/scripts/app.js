'use strict';

/*global Firebase */

angular.module('singularPracticeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('TodoService', function ($firebase) {
    return $firebase(new Firebase('https://singular-app.firebaseio.com/tasks'));
  });

