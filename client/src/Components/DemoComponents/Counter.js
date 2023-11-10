/*
This is an example of a class component.
These are ES6 classes that extend 
'React.Components'. They can hold and manage local
state and have access to React's lifecycle methods.
*/

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  // Method to increment count
  increment() {
    /*
    // Code for increment +1
    this.setState(
      { 
        count: this.state.count + 1 
      }, 
      () => {
        console.log('Callback Value', this.state.count) // Adds attribute to console
      }
    )
    */

    // Code for increment +5, pass in function as object (prevState)
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }))

    console.log(this.state.count)
  }

  // Method to increment count by 5
  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/*<button onClick={() => this.increment()}>Increment</button>*/}
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter;

// This counter increments and updates the state when a button is clicked

/*
// Reference to App.js (Directory may have changed)
import React, { Component } from 'react';
import Counter from './Components/Counter';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
*/