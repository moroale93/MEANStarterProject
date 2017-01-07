angular.module('myApp').config(['$routeProvider', '$locationProvider', function(
    $routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
    })

    .when('/addUser', {
        templateUrl: 'views/addUser.html',
        controller: 'AddCtrl'
    })

    .when('/users', {
        templateUrl: 'views/listUser.html',
        controller: 'ListCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
