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

let count = 0;


const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};



var appRoot = document.getElementById('app');


const renderCounterApp = () =>{
// create a template two var JSX expression
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template2, appRoot);
}

renderCounterApp();