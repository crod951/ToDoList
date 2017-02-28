(function () {
  angular
    .module('ToDoList')
    .controller('DashboardController', [DashboardController]);

  function DashboardController() {
    var vm = this;
    vm.numTasks = 0;
  }
});
