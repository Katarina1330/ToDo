
// Get All Tasks
var taskApp = angular.module('TaskApp', []);
taskApp.controller('taskCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.isEditMode = false;
    $scope.toogleEditMode = function (isEditMode) {
        $scope.isEditMode = !isEditMode;
    }
    $http.get('http://localhost:49878/api/task/getalltasks').success(function (data, status, headers, config) {
        $scope.tasks = data;
    }).error(function (data, status, headers, config) {
        alert("error");
    });

    $scope.update = function (task) {
        $http.post('http://localhost:49878/api/task/update', task).success(function (data, status, headers, config) {
        }).error(function (data, status, headers, confing) {
            alert("error");
        });
    }

    $scope.delete = function (task) {
        var r = confirm("Do you want to delete your task?");
        if (r == true) {
            $http.post('http://localhost:49878/api/task/delete', task).success(function (data, status, headers, config) {

                $http.get('http://localhost:49878/api/task/getalltasks').success(function (data, status, headers, config) {
                    $scope.tasks = data;
                }).error(function (data, status, headers, config) {
                    alert("error");
                });
            }).error(function (data, status, headers, confing) {
                alert("error");
            })
        } else {
            $http.get('http://localhost:49878/api/task/getalltasks').success(function (data, status, headers, config) {
                $scope.tasks = data;

            }).error(function (data, status, headers, config) {
                alert("error");
            });
        }
    }
}]);

// Create new Task
var taskAdd = angular.module('TaskAdd', []);
taskAdd.controller('TaskAddController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function () {
        if ($scope.Title) {
            var task = {
                "Title": $scope.Title,
                "CreatedDate": $scope.CreatedDate,
                "Description": $scope.Description,
                "State": $scope.State,
                "DeadlineDate": $scope.DeadlineDate
            }
            $http.post('http://localhost:49878/api/task/add', task).success(function (data, status, headers, config) {
            }).error(function (data, status, headers, confing) {
                alert("error");
            });
        }
    };
}]);


