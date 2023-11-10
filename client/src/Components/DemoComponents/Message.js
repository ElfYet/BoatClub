/*
State:
- state is managed within the component
- Variables declared in the function body
-state can be changed
- useState Hook -> Functional Components
- this.state -> Class Components

See Welcome.js for props
*/

import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

     // Method to alter state of class component
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
        <div> 
            <h1>
                {this.state.message}
            </h1> 
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message

//Look into destructuring props or states for a shorthand


/*
// App.js file for reference (Directory may have changed)
import React, { Component } from 'react''
import Message from './Components/Message';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
      </div>
    );
  }
}

export default App;
*/