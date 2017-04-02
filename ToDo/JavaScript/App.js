



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

            }).error(function (data, status, headers, confing) {
                alert("error");
            })
            var existingTasks = [];
            for (var i = 0; i < $scope.tasks.length; i++) {
                if ($scope.tasks[i].ID != task.ID) {
                    existingTasks.push($scope.tasks[i]); 
                }
            }
            $scope.tasks = existingTasks;

            //$scope.remove = function (task) {
            //    $scope.tasks.splice($scope.tasks.indexOf(task), 1);
            //}
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
    };
}]);



