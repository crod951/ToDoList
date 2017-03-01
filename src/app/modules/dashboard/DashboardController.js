(function () {
  function DashboardController() {
    var vm = this;
    vm.numTasks = 0;

    vm.todayDate = moment().format('dddd MMMM Do YYYY');
  }
  angular
    .module('ToDoList')
    .controller('DashboardController', [DashboardController]);

})();
