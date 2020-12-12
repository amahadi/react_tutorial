console.log('App.js is running!')

const app = {
    title: 'This is the title',
    subTitle: "This is the sub title",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderOptionApp()
    }
}

const removeAll = () => {
    app.options = []
    renderOptionApp()
}
// JSX - JavaScript XML

const appRoot = document.getElementById("app")

const renderOptionApp = () => {
    const template = 
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? "You have " + app.options.length + " options" : "You have no option"}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={Math.random()}>{option}</li>
                    })
                }
            </ol>

            <button onClick={removeAll}>Remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>

    ReactDOM.render(template, appRoot) 
}

renderOptionApp()