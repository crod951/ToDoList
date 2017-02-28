(function () {
  function ListController() {
    var vm = this;
    vm.numTasks = 0;
    vm.taskList = []
    vm.todayDate = moment().format('ddd MMM Do YYYY');
    vm.setCreatingValue = false;

    vm.setCreating = function() {
      vm.setCreatingValue = true;
    }

    vm.setNotCreating = function() {
      vm.setCreatingValue = false;
    }
  }
  angular
    .module('ToDoList')
    .controller('ListController', [ListController]);

})();
