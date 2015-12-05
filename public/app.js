angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource', 'angularUtils.directives.dirPagination']);

angular.module('app').controller('mainCtrl', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    }
});

angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'partials/views/home',
            controller: 'homeCtrl'
        });
});