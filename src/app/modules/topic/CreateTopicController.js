(function () {
  function CreateTopicController($uibModalInstance) {
    var vm = this;
    vm.topic = '';

    vm.cancel = function () {
      $uibModalInstance.close();
    };

    vm.create = function () {
      $uibModalInstance.close(vm.topic);
    };
  }
  angular
    .module('ToDoList')
    .controller('CreateTopicController', ['$uibModalInstance', CreateTopicController]);

})();
