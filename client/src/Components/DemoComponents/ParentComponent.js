// Method as props, refer to ChildComponent as well
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    
    }

    // The alert will allow for a pop up message to show on display
    greetParent() {
        alert('Hello ' + this.state.parentName)
    }
    // Could also write as ${this.state.parentName}; however, this is only for ES6

    render() {
        return (
            <div>
                {/* greetHandler is an attribute */}
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent