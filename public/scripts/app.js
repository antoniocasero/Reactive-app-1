"use strict";

console.log("is running");

//JSX - JavaScripy XML
var app = {
    title: "Indecision App",
    subtitle: "Indecision App",
    options: ["one", "two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length ? "Options are" : "No options",
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "one"
        ),
        React.createElement(
            "li",
            null,
            "two"
        )
    )
);

var user = {
    userName: 'Anton',
    userAge: 36,
    userLocation: 'Berlin'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    // create a template two var JSX expression
    var template2 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
