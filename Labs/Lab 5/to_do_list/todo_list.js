var taskList = [];
var $ = function (id) {'use strict'; return document.getElementById(id); };

var listTasks = function () {
    'use strict';
    var tasks = "";
    for (var i = 0; i < taskList.length; i++) {
        tasks += taskList[i] + "\n";
    }
    $("task_list").value = tasks;
};

var addTask = function () {
    'use strict';
    var task = $("new_task").value;
    if (task == "") {
        window.alert("There needs to be something in the 'Add task' box.")
    }
    else {
        taskList[taskList.length] = task;
    }
    $("new_task").value = "";
    listTasks();
    $("new_task").focus();
};

var showTasks = function () {
    'use strict';
    var nextTask = taskList.shift();
    $("next_task").value = nextTask;
    if (nextTask == undefined) {
        $("next_task").value = "";
        $("task_list").value = "";
        window.alert("There are no tasks left.");
    }
    listTasks();
};

window.onload = function () {
    'use strict';
    $("add_task").onclick = addTask;
    $("show_next_task").onclick = showTasks;
};