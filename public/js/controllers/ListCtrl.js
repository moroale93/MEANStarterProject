angular.module('myApp').controller('ListCtrl', ['$scope', 'ApiRequester',
    function($scope, ApiRequester) {
        $scope.users = [];

        $scope.updateList = function() {
            ApiRequester.getUsers().then(
                function(resp) {
                    $scope.users = resp.data;
                },
                function(resp) {}
            );
        };

        $scope.updateList();

        $scope.deleteAllClick = function() {
            ApiRequester.deleteAllUsers().then(
                $scope.updateList,
                function(resp) {}
            );
        }
    }
]);
