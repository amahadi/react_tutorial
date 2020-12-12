const user = {
    name: 'Alvi Mahadi',
    age: 27,
    location: 'Victoria, BC'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}


let count = 0
const someId = 'my-id'
const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={someId} className="btn btn-primary" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    
    const appRoot = document.getElementById("app")
    
    ReactDOM.render(templateTwo, appRoot) 
}

renderCounterApp()