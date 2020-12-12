const appRoot = document.getElementById("app")

const appData = {
    message: "This is the message you can see now!",
    tracker: 0
}

const addOneToTracker = () => {
    appData.tracker++
    render()
}

const render = () => {
    const template = 
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {addOneToTracker}>
                {appData.tracker % 2 === 0 ? "Show details" : "Hide details"}
            </button>
            {appData.tracker % 2 === 0 ? <p>{appData.message}</p> : undefined}
        </div>
    
    ReactDOM.render(template, appRoot)
}

render()
