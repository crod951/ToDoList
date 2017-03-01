(function() {
  function TaskService() {
    this.topics = [
      {name: "Personal"},
      {name: "Business"},
      {name: "Create New Topic"}
    ];

    this.taskList = [
      {id: 1, name: "Test Task", topic: "Personal", completed: false, description: "This is a Test Task"}
    ];

    this.prependTaskList = function (data) {
      this.taskList.unshift(data);
    };
  }
  angular
    .module('ToDoList')
    .service('TaskService', [TaskService]);
})();
