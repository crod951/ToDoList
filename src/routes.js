angular
  .module('ToDoList')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/modules/dashboard/dashboardView.html'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'app/modules/list/listView.html'
    })
  ;
}
