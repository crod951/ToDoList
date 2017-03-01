(function () {
  function TaskListController($uibModal, TaskService) {
    var vm = this;
    vm.numTasks = 0;
    vm.todayDate = moment().format('ddd MMM Do YYYY');
    vm.selectedTopic = undefined;
    vm.taskName = undefined;
    vm.newDescription = undefined;
    vm.topics = TaskService.topics;
    vm.editTask = false;
    vm.taskList = TaskService.taskList;

    vm.checkCreateNewTopic = function() {
      if (vm.selectedTopic.name === "Create New Topic") {
        var modalInstance = $uibModal.open({
          animation: false,
          backdrop: 'static',
          keyboard: false,
          templateUrl: 'app/modules/topic/CreateTopicView.html',
          controller: 'CreateTopicController',
          controllerAs: 'createTopicCtrl',
          size: 'sm'
        });

        modalInstance.result.then(
          function (result) {
            vm.topics[vm.topics.length-1].name = result;
            vm.topics.push({name: "Create New Topic"});
          }
        );
      }
    };

    vm.createTask = function () {
      if (vm.taskName) {
        var newId = vm.taskList[0] ? vm.taskList[0].id + 1 : 0;
        vm.taskList.unshift({id: newId, name: vm.taskName, topic: vm.selectedTopic ? vm.selectedTopic.name : undefined, completed: false});
        vm.taskName = undefined;
        vm.selectedTopic = undefined;
      }
    };

    vm.deleteTask = function (id) {
      angular.forEach(vm.taskList, function(value, key) {
        if (value.id === id) {
          vm.taskList.splice(key, 1);
        }
      });
    };

    vm.isEditTask = function (description) {
      vm.editTask = true;
      vm.newDescription = description;
    };

    vm.isNotEditTask = function () {
      vm.editTask = false;
    };

    vm.saveDescription = function (id) {
      angular.forEach(vm.taskList, function(value, key) {
        if (value.id === id) {
          vm.taskList[key].description = vm.newDescription;
        }
      });
      vm.editTask = false;
    };

  }
  angular
    .module('ToDoList')
    .controller('TaskListController', ['$uibModal', 'TaskService', TaskListController]);

})();
