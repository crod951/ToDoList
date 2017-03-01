(function () {
  function NavbarController($scope, TaskService) {
    var vm = this;
    vm.taskListLength = TaskService.taskList.length;
    $scope.service = TaskService;

    $scope.$watch('service.taskList.length', function (newVal) {
      vm.taskListLength = newVal;
    });
  }
  angular
    .module('ToDoList')
    .controller('NavbarController', ['$scope','TaskService', NavbarController]);

})();
