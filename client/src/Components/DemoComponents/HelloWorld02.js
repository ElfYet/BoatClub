/*
Class Components:
- More feature rich
- Maintain their own private data - state
- Con: Complex UI logic
- Provide lifecycle hooks
- AKA Stateful/ Smart/ Containter

SEE HelloWorld for Functional Components
*/

import React, { Component } from 'react';

class HelloWorld02 extends Component {
    render() {
        return <h1>Hello, World! (Class Component)</h1>
    }
}

/*
// Code associated with Welcome.js
class HelloWorld02 extends Component {
    render() {
        return <h1>Hello, {this.prop.name}! a.k.a {this.props.heroName</h1>
    }
}
*/

export default HelloWorld02

// Note that you can have numbers in the .js component files
// However, it is pacal case. So, the first letter must be uppercase
// e.g. MyVariableName