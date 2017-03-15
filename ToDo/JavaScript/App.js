

var app = angular.module('TaskApp', []);

// Get All Tasks
app.controller('taskCtrl', function ($scope, $http) {
    $scope.isEditMode = false;
    $scope.toogleEditMode = function (isEditMode) {
        $scope.isEditMode = !isEditMode;
    }
    $http.get('http://localhost:49878/api/task/getalltasks').success(function (data, status, headers, config) {
        $scope.tasks = data;
    }).error(function (data, status, headers, config) {
        alert("error");
    });
});




// Create new Task
app.controller('TaskAddController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function () {
        if ($scope.Title) {
            var task = {
                "Title": $scope.Title,
                "Description": $scope.Description,
                "State": $scope.State
            }
            $http.post('http://localhost:49878/api/task/add', task).success(function (data, status, headers, config) {
                alert('Task Added Successfully!');
            }).error(function (data, status, headers, confing) {
                alert("error");
            });
        }
    };
}]);

// Update Task