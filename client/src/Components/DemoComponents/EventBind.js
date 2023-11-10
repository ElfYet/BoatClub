// Example of Event Binding, including 4 Approaches***
// Approach #3 is most recommended
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // Code for Approach03, not needed for Appoach 1,2,3
        // this.clickHandler = this.clickHandler.bind(this)

    }

    /*
    // Code for Approach 1,2,3
    clickHandler() {
        
        // The setState doesn't work, if you don't bind the function with '.bind(this)'... Error!
        this.setState({
            message: 'Goodbye'
        })
        
       console.log(this)
    }
    */

    // Code for Approach04
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            {/* Approach01 <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* Approach02 <button onClick={() => this.clickHandler()} >Click</button> */}
            {/* Approach03 & 04 */} 
            <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind