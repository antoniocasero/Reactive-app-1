console.log("is running")

//JSX - JavaScripy XML
const app = {
    title: "Indecision App",
    subtitle: "Indecision App",
    options: ["one", "two"]
};

const template = ( 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length ? "Options are" : "No options"}
        <ol>
            <li>one</li>
            <li>two</li>
        </ol>
    </div>
);

const user = {
    userName: 'Anton',
    userAge: 36,
    userLocation: 'Berlin'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

// create a template two var JSX expression

const template2 = (
    <div>
        <h1>{user.userName}</h1>
        <p>Age: {user.userAge}</p>
        {getLocation(user.userLocation)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);