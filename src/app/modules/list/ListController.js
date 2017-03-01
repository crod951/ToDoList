(function () {
  function ListController($uibModal) {
    var vm = this;
    vm.numTasks = 0;
    vm.taskList = []
    vm.todayDate = moment().format('ddd MMM Do YYYY');
    vm.selectedTopic = {};
    vm.setCreatingValue = false;
    vm.topics = [
      {"name":"Personal"},
      {"name":"Business"},
      {"name":"Create New Topic"}
    ]

    vm.setCreating = function() {
      vm.setCreatingValue = true;
    }

    vm.setNotCreating = function() {
      vm.setCreatingValue = false;
    }

    vm.checkCreateNewTopic = function() {
      if (vm.selectedTopic.name === "Create New Topic") {
        $uibModal.open({
          animation: false,
          backdrop: 'static',
          keyboard: false,
          templateUrl: 'app/modules/topic/CreateTopicView.html',
          size: 'md'
        });
      }
    }
  }
  angular
    .module('ToDoList')
    .controller('ListController', ['$uibModal', ListController]);

})();
