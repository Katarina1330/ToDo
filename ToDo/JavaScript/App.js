



//var getAllTasksUrl = 'http://localhost:49878/api/task/getalltasks';
//var updateUrl = 'http://localhost:49878/api/task/update';
//var deleteUrl = 'http://localhost:49878/api/task/delete';
//var addUrl = 'http://localhost:49878/api/task/add';

//// Get All Tasks:
//var taskApp = angular.module('TaskApp', []);
//taskApp.controller('taskCtrl', ['$scope', '$http', function ($scope, $http) {
//    $scope.isEditMode = false;
//    $scope.toogleEditMode = function (isEditMode) {
//        $scope.isEditMode = !isEditMode;
//    }

//    var promise = $http.get(getAllTasksUrl);
//    promise.then(function (response) {
//        $scope.tasks = response.data;
//    }, function (error) {
//        alert("error");
//    });

//    // Update Task:
//    $scope.update = function (task) {

//        var promise = $http.post(updateUrl, task);
//        promise.then(function (response) {
//        }, function (error) {
//            console.log(error);
//            alert("Error occured!");
//        });
//    }

//    // Delete Task:
//    $scope.delete = function (task) {
//        var r = confirm("Do you want to delete your task?");
//        if (r == true) {

//            var promise = $http.post(deleteUrl, task);
//            promise.then(function (response) {
//            }, function (error) {
//                console.log(error);
//                alert("Error occured!");
//            });

//            var existingTasks = [];
//            for (var i = 0; i < $scope.tasks.length; i++) {
//                if ($scope.tasks[i].ID != task.ID) {
//                    existingTasks.push($scope.tasks[i]); 
//                }
//            }
//            $scope.tasks = existingTasks;
//        } 
//    }

//    // Create new Task:
//    $scope.submit = function () {
//        if ($scope.Title) {
//            var task = {
//                "Title": $scope.Title,
//                "CreatedDate": $scope.CreatedDate,
//                "Description": $scope.Description,
//                "State": $scope.State,
//                "DeadlineDate": $scope.DeadlineDate
//            }
//            var promise = $http.post(addUrl, task);

//            promise.then(function (response) {
//                $scope.Title = "";
//                var addedTask = response.data;
//                $scope.tasks.push(addedTask);
//            }, function (error) {
//                console.log(error);
//                alert("Error occured!");
//            });
//        }
//    };
//}]);


var app = angular.module('TaskApp', []);

