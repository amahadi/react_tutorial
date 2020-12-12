class IndecisionApp extends React.Component {
    render() {
        const title = "Title"
        const subTitle = "Subtitle"
        const options = ["item 1", "item 2", "item 4"]
        return (
            <div>
                <Header />
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your fate in the hand of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("Remove all button pressed!")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <p>{`You currently have ${this.props.options.length} option(s)`}</p>
                <Option options={this.props.options}/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.options.map(option => <li key={option}>{option}</li>)}
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component {
    onFormSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        if(option) {
            // app.options.push(option)
            // e.target.elements.option.value = ''
            // renderOptionApp()
            alert("add option with text in the field.")
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))