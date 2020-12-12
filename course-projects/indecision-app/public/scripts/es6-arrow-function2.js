'use strict';

console.log('App.js is running!');

var app = {
    title: 'This is the title',
    subTitle: "This is the sub title",
    options: []

    // JSX - JavaScript XML

};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    )
);

var user = {
    name: 'Alvi Mahadi',
    age: 27,
    location: 'Victoria, BC'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var count = 0;
var userName = 'Utsab';
var userAge = 27;
var userLocation = "Sanich, Victoria, BC";
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: 'my-id' },
        '+1'
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
