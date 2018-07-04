console.log("is running")

//JSX - JavaScripy XML
const app = {
    title: "Indecision App",
    subtitle: "Indecision App",
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    //Get value
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option)
        event.target.elements.option.value = '';
    }
    render();
};

const reset = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * app.options.length);
    const selected = app.options[random];
    alert(selected);
}

var appRoot = document.getElementById('app');

const numbers = [55,11,112]

const render = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? "Options are" : "No options"}</p>
            <button  disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={reset}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
