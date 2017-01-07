angular.module('myApp').controller('AddCtrl', ['$scope', 'ApiRequester',
    function($scope, ApiRequester) {
        $scope.user = {};

        $scope.addUser = function() {
            ApiRequester.addUser($scope.user).then(
                function(resp) {
                    $scope.user = {};
                },
                function(resp) {

                });
        }
    }
]);
