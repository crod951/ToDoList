(function () {
  function TaskListController($uibModal, TaskService) {
    var vm = this;
    vm.numTasks = 0;
    vm.todayDate = moment().format('ddd MMM Do YYYY');
    vm.selectedTopic = undefined;
    vm.taskName = undefined;
    vm.newTaskName = undefined;
    vm.newSelectedTopic = undefined;
    vm.newDescription = undefined;
    vm.topics = TaskService.topics;
    vm.taskList = TaskService.taskList;

    vm.checkCreateNewTopic = function() {
      if (vm.selectedTopic.name === "Create New Topic" || vm.newSelectedTopic.name === "Create New Topic") {
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
            if (result) {
              vm.topics[vm.topics.length-1].name = result;
              vm.topics.push({name: "Create New Topic"});
            }
            else {
              vm.selectedTopic = undefined;
            }
          }
        );
      }
    };

    vm.createTask = function () {
      if (vm.taskName) {
        var newId = vm.taskList[0] ? vm.taskList[0].id + 1 : 0;
        vm.taskList.unshift({id: newId, name: vm.taskName, topic: vm.selectedTopic ? vm.selectedTopic : undefined, completed: false, isEditing: false});
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

    vm.isEditTask = function (id, name, topic, description) {
      angular.forEach(vm.taskList, function(value, key) {
        if (value.id === id) {
          vm.taskList[key].isEditing = true;
        }
      });
      vm.newTaskName = name;
      vm.newSelectedTopic = topic;
      vm.newDescription = description;
    };

    vm.isNotEditTask = function (id) {
      angular.forEach(vm.taskList, function(value, key) {
        if (value.id === id) {
          vm.taskList[key].isEditing = false;
        }
      });
    };

    vm.saveDescription = function (id) {
      angular.forEach(vm.taskList, function(value, key) {
        if (value.id === id) {
          vm.taskList[key].name = vm.newTaskName;
          vm.taskList[key].topic = vm.newSelectedTopic;
          vm.taskList[key].description = vm.newDescription;
          vm.taskList[key].isEditing = false;
        }
      });
    };

  }
  angular
    .module('ToDoList')
    .controller('TaskListController', ['$uibModal', 'TaskService', TaskListController]);

})();
