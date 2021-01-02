class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options: ["item 1", "item 2", "item 4"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomIndex = Math.floor((Math.random() * this.state.options.length))
        alert(this.state.options[randomIndex])  
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = "Title"
        const subTitle = "Subtitle"
        const options = ["item 1", "item 2", "item 4"]
        return (
            <div>
                <Header />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

const Header = () => {
    return (
        <div>
            <h1>Indecision</h1>
            <h2>Put your fate in the hand of a computer</h2>
        </div>
    )
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Indecision</h1>
//                 <h2>Put your fate in the hand of a computer</h2>
//             </div>
//         )
//     }
// }

// replacing class base approach with stateless functional approach

const Action = (props) => {
    return (
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    )
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}>
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            <p>{`You currently have ${props.options.length} option(s)`}</p>
            <Option options={props.options}/>
        </div>
    )
}

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <p>{`You currently have ${this.props.options.length} option(s)`}</p>
//                 <Option options={this.props.options}/>
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            <ol>
                {props.options.map(option => <li key={option}>{option}</li>)}
            </ol>
        </div>
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ol>
//                     {this.props.options.map(option => <li key={option}>{option}</li>)}
//                 </ol>
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }

    onFormSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => {
            return {
                error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

// ReactDOM.render(<User name="Alvi" age={27}/>, document.getElementById("app"))

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))