'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/TodoListController');

    // todoList routes
    app.route('/tasks')
        .get(todoList.listTasks)
        .post(todoList.createTask);

    app.route('/tasks/:taskId')
        .get(todoList.getTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask)
};