"use strict";

var appRoot = document.getElementById("app");

var appData = {
    message: "This is the message you can see now!",
    tracker: 0
};

var addOneToTracker = function addOneToTracker() {
    appData.tracker++;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: addOneToTracker },
            appData.tracker % 2 === 0 ? "Show details" : "Hide details"
        ),
        appData.tracker % 2 === 0 ? React.createElement(
            "p",
            null,
            appData.message
        ) : undefined
    );

    ReactDOM.render(template, appRoot);
};

render();
