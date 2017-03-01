(function() {
  function TaskService() {
    this.topics = [
      {name: "Personal"},
      {name: "Business"},
      {name: "Create New Topic"}
    ];

    this.taskList = [
      {id: 1, name: "Test Task", completed: false, description: "This is a Test Task", isEditing: false}
    ];
  }
  angular
    .module('ToDoList')
    .service('TaskService', [TaskService]);
})();
