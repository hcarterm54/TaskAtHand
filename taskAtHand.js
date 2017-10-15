"use strict";

/***********************************************
    Define the main application object using a 
    constructor function after the DOM is ready
***********************************************/
function TaskAtHandApp() {

    var version = "v1.0";

    function setStatus(message) {
        $("#app>footer").text(message);
    }

    function addTask() {
        var taskName = $("#new-task-name").val();
        if (taskName) {
            addTaskElement(taskName);
            // Reset the field
            $("#new-task-name").val("").focus();
        }
    }

    function addTaskElement(taskName) {
        var $task = $("<li></li>");
        $task.text(taskName);
        $("#task-list").append($task);
    }

    this.start = function ()
    {
        $("#new-task-name").keypress(function (e) {
            if (e.which == 13) // Enter key
            {
                addTask();
                return false;
            }
        })
            .focus();

        $("#app>header").append(version);
        setStatus("Good n' Ready");
    };
}

/**********************************************************
    Create an instance of the main application object,
    assign it to a global variable named app by attaching
    it to the window object, then start the application
**********************************************************/
$(function () {
    window.app = new TaskAtHandApp();
    window.app.start();
});