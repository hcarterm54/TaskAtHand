"use strict";

/***********************************************
    Define the main application object using a 
    constructor function after the DOM is ready
***********************************************/
function MyApp() {
    var version = "v1.0";

    function setStatus(message) {
        $("#app>footer").text(message);
    }

    this.start = function () {
        $("#app>header").append(version);
        setStatus("ready");
    };
}

/**********************************************************
    Create an instance of the main application object,
    assign it to a global variable named app by attaching
    it to the window object, then start the application
**********************************************************/
$(function () {
    window.app = new MyApp();
    window.app.start();
});