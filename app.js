angular.module('todoList', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('todoList').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            '': {
                templateUrl: 'partial/home/home.html',
                controller: 'HomeCtrl'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});