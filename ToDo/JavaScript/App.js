



var getAllTasksUrl = 'http://localhost:49878/api/task/getalltasks';
var updateUrl = 'http://localhost:49878/api/task/update';
var deleteUrl = 'http://localhost:49878/api/task/delete';
var addUrl = 'http://localhost:49878/api/task/add';

// Get All Tasks:
var taskApp = angular.module('TaskApp', []);
taskApp.controller('taskCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.isEditMode = false;
    $scope.toogleEditMode = function (isEditMode) {
        $scope.isEditMode = !isEditMode;
    }
    $http.get(getAllTasksUrl).success(function (data, status, headers, config) {
        $scope.tasks = data;
    }).error(function (data, status, headers, config) {
        alert("error");
    });

    // Update Task:
    $scope.update = function (task) {
        $http.post(updateUrl, task).success(function (data, status, headers, config) {
        }).error(function (data, status, headers, confing) {
            alert("error");
        });
    }

    // Delete Task:
    $scope.delete = function (task) {
        var r = confirm("Do you want to delete your task?");
        if (r == true) {
            $http.post(deleteUrl, task).success(function (data, status, headers, config) {

                $http.get(getAllTasksUrl).success(function (data, status, headers, config) {
                    $scope.tasks = data;
                }).error(function (data, status, headers, config) {
                    alert("error");
                });
            }).error(function (data, status, headers, confing) {
                alert("error");
            })
        } else {
            $http.get(getAllTasksUrl).success(function (data, status, headers, config) {
                $scope.tasks = data;

            }).error(function (data, status, headers, config) {
                alert("error");
            });
        }
    }

    // Create new Task:
    $scope.submit = function () {
        if ($scope.Title) {
            var task = {
                "Title": $scope.Title,
                "CreatedDate": $scope.CreatedDate,
                "Description": $scope.Description,
                "State": $scope.State,
                "DeadlineDate": $scope.DeadlineDate
            }

            $http.post(addUrl, task).success(function (data, status, headers, config) {
                $scope.Title = "";
                $http.get(getAllTasksUrl).success(function (data, status, headers, config) {
                    $scope.tasks = data;
                });
            }).error(function (data, status, headers, confing) {
                alert("error");
            });
        }


        //$scope.Title = "";
        //$scope.
           

    };



}]);



