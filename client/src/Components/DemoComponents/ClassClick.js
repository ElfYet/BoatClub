// Example of Class Component Event Handling
import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler() {
        console.log('Click the Button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick

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