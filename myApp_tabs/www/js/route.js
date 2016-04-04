// 全局路由模块
angular.module('route', ['tab.route', 'home.route'])
  .config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/tab/home');

  });
