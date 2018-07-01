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

// create a template two var JSX expression

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.userAge
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
