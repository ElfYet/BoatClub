// Example of Function Event Handler
import React from 'react'

function FunctionClick() {
    
    function clickHandler() {
            console.log('Button Clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
// Note that the Event Handler is written as a function like so, {clickHandler}. Rather than,
// clickHandler() -> This would be a function call (Console will be instantly logged)

// Remember Event Handlers are fuctions not function calls

export default FunctionClick

/*
// App.js for reference
class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        <ClassClick />
      </div>
    );
  };
};

export default App;
*/