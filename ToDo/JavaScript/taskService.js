app.service('taskService', function ($http) {

    var getAllTasksUrl = 'http://localhost:49878/api/task/getalltasks';
    var updateUrl = 'http://localhost:49878/api/task/update';
    var deleteUrl = 'http://localhost:49878/api/task/delete';
    var addUrl = 'http://localhost:49878/api/task/add';

    var self = this;
    self.$http = $http;
    self.tasks;

    // Kreiramo metodu koja ucitava sve taskove:
    self.loadTasks = function () {
        var promise = self.$http.get(getAllTasksUrl);

        promise.then(function (response) {
            self.tasks = response.data;
        }, function (error) {
            alert("error");
        });
    }

    // Update Task:
    self.update = function (task) {
        var promise = self.$http.post(updateUrl, task);

        promise.then(function (response) {

        }, function (error) {
            console.log(error);
            alert("Error occured!");
        });
    }

    // Delete Task:
    self.delete = function (task) {

        var promise = self.$http.post(deleteUrl, task);

        promise.then(function (response) {
            var existingTasks = [];
            for (var i = 0; i < self.tasks.length; i++) {
                if (self.tasks[i].ID != task.ID) {
                    existingTasks.push(self.tasks[i]);
                }
            }

            self.tasks = existingTasks;

        }, function (error) {
            console.log(error);
            alert("Error occured!");
        });
    }

    // Create new task:
    self.submit = function (task) {
        var promise = self.$http.post(addUrl, task);

        promise.then(function (response) {
            var addedTask = response.data;
            self.tasks.push(addedTask);
        }, function () {
            console.log(error);
            alert("Error occured!");
        })
    }
});