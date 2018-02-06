'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.listTasks = function(request, response) {
    Task.find({}, function(error, task) {
        if (error) {
            response.send(error);
        } else {
            response.json(task);
        }
    })
};

exports.createTask = function(request, response) {
    var task = new Task(request.body);

    task.save(function(error, task) {
        if (error) {
            response.send(error);
        } else {
            response.json(task);
        }
    });
};

exports.getTask = function(request, response) {
    Task.findById(request.params.taskId, function(error, task) {
        if (error) {
            response.send(error);
        } else {
            response.json(task);
        }
    });
};

exports.updateTask = function(request, response) {
    Task.findOneAndUpdate({
        _id: request.params.taskId
    },
    function(error, task) {
        if (error) {
            response.send(error);
        } else {
            response.json(task);
        }
    });
};

exports.deleteTask = function(request, response) {
    task.remove({
        _id: request.params.taskId
    }, function(error, task) {
            if (error) {
                response.send(error);
            } else {
                response.json({ message: 'Task successfully deleted' });
            }
    });
};

