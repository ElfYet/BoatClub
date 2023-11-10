/*
Properties (props):
- props get passed to the component
- Function parameters
- props are immutable
- props -> Functional Components
- this.props -> Class Components

See Message.js for States
*/

import React from 'react';

// Note you can name the paramater anything, but it is recommended to use 'props'
const Welcome = (props) => {
    console.log(props)
    return (
        <div>    
            <h1>
                Hello, {props.name}! a.k.a {props.heroname}
            </h1>
            {props.children}
        </div>    
    )
}

export default Welcome;

//Look into destructuring props or states for a shorthand

/*
// App.js file for reference (Directory may have changed)
import React, { Component } from 'react';
import Welcome from './Components/Welcome'
import HelloWorld02 from './Components/HelloWorld02'
import './Styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Bruce" heroname="Batman">
          <p>This is children props</p>
        </Welcome>
        <Welcome name="Clark" heroname="Superman">
          <button>Action</button>
        </Welcome>
        <Welcome name="Diana" heroname="Wonder Woman" />
        {Comment: Refer to HelloWorld02 for how props are intoduced in class components}
        <HelloWorld02 name="Bruce" heroname="Batman" />
        <HelloWorld02 name="Clark" heroname="Superman" />
        <HelloWorld02 name="Diana" heroname="Wonder Woman" />
      </div>
    );
  }
}

export default App;
*/