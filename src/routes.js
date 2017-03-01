angular
  .module('ToDoList')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/modules/dashboard/DashboardView.html',
      controller: 'DashboardController',
      controllerAs: 'dashboardCtrl'
    })
    .state('list', {
      url: '/tasklist',
      templateUrl: 'app/modules/task/tasklist/TaskListView.html',
      controller: 'TaskListController',
      controllerAs: 'listCtrl'
    })
  ;
}
