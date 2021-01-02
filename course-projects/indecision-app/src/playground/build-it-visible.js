class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
            visibilityButtonText: "Show details"
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            if(prevState.visibility){
                return {
                    visibility: false,
                    visibilityButtonText: "Show details"
                }
                
            } else {
                return {
                    visibility: true,
                    visibilityButtonText: "Hide details"
                }
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibilityButtonText}
                </button>
                {this.state.visibility ? <p>This is the message you can see now!</p> : undefined}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))




// const appRoot = document.getElementById("app")

// const appData = {
//     message: "This is the message you can see now!",
//     tracker: 0
// }

// const addOneToTracker = () => {
//     appData.tracker++
//     render()
// }

// const render = () => {
//     const template = 
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {addOneToTracker}>
//                 {appData.tracker % 2 === 0 ? "Show details" : "Hide details"}
//             </button>
//             {appData.tracker % 2 === 0 ? <p>{appData.message}</p> : undefined}
//         </div>
    
//     ReactDOM.render(template, appRoot)
// }

// render()
