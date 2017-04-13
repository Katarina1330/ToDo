app.controller('taskCtrl', function ($scope, taskService) {

    // Dodeljujemo servis u $scope
    $scope.taskService = taskService;

    $scope.isEditMode = false;
    $scope.toogleEditMode = function (isEditMode) {
        $scope.isEditMode = !isEditMode;
    }

    // Kreiramo metodu Update i dodeljujemo je u $scope:
    $scope.update = function (task) {
        // Ovde pozivamo metodu is servisa:
        taskService.update(task);
    }

    // Kreiramo metodu delete i dodeljujemo u $scope:
    $scope.delete = function (task) {
        var r = confirm("Do you want to delete your Task?");
        if (r == true) {
            // Ovde pozivamo metodu iz servisa:
            taskService.delete(task);
        }
    }

    // Kreiramo metodu submit i dodeljujemo u $scope:
    $scope.submit = function (task) {
        if ($scope.Title) {
            var task = {
                "Title": $scope.Title,
                "CreatedDate": $scope.CreatedDate,
                "Descriptuon": $scope.Description,
                "State": $scope.State,
                "DeadlineDate": $scope.DeadlineDate
            }
        }
        $scope.Title = "";

        // Ovde pozivamo metodu iz servisa:
        taskService.submit(task);
    }


    $scope.taskService.loadTasks();
});