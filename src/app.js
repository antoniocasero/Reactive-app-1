class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in danger---';
        const options = ['1', '2', '3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert('Lool');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}> What should i do </button>
            </div>
        );
    }
}

class Options extends React.Component {

    handleRemove() {
        alert('LALAL');
    }

    render() {
        return (
        <div>
        <button onClick={this.handleRemove}>Remove all</button>
        {
            this.props.options.map(element => <Option key={element} optionText={element}/>)
        }
        </div>
        );
    }
};

class Option extends React.Component {
    render() {
        return (
            <div> 
                {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            alert('dsdsds')
        }

    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                <button>Add option</button>
            </form>
            </div>
        );
    }
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))