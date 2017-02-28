(function () {
  function DashboardController() {
    var vm = this;
    vm.numTasks = 0;
  }
  angular
    .module('ToDoList')
    .controller('DashboardController', [DashboardController]);

})();
