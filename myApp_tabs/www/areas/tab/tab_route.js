//引导页子路由模块儿
angular.module('tab.route', ['tab.controller'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'areas/tab/tab.html',
      controller: 'TabCtrl'
      // .state('tab', {
      //   url: '/tab',

      //   views: {
      //       templateUrl: 'areas/home/home.html',
      //       controller: 'HomeCtrl'

      //   }
       })
  })

