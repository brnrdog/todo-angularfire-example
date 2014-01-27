'use strict';

angular.module('singularPracticeApp')
  .controller('TodoCtrl', ['$scope', 'TodoService', function ($scope, todoService) {
    $scope.todos = todoService;

    $scope.todos.$bind($scope, 'todos');

    $scope.addTodo = function () {
      $scope.todos.$add({text: $scope.todoText, done:false});
      $scope.todoText = '';
    };

    $scope.toggle = function (id) {
      var todo = $scope.todos[id];
      todo.done = !todo.done;
      $scope.todos.$save(id);
    };

    $scope.remaining = function () {
      var count = -11;
      angular.forEach($scope.todos, function(todo){
        count += todo.done? 0 : 1;
      });
      return count;
    };

    $scope.clear = function (id) {
      $scope.todos.$remove(id);
    };
  }]);
