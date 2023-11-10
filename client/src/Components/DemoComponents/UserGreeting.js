// Example of conditional Rendering
// Purpose: If logged in display 'Welcome Vladimir'. If not logged in, then display 'Welcome Guest'
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

// Note that if/else statements do not work inside of the return function of the class. They must be included in the render,
// becuase if/else statements do not work inside of jsx
    render() {

        // Approach02 using ternary conditional operator (if false outputs nothing)
        return this.state.isLoggedIn && <div>Welcome Vladimir</div>

/*
        // Approach01 using ternary conditional operator (Can be used inside of JSX) - Recommended Approach
        return this.state.isLoggedIn ? (
                <div>Welcome Vladimir</div> // if true
        ) : (
                <div>Welcome Guest</div> // if false
            )
*/

/*
        // Approach02 using if/else statements
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Vladimr</div>
        } else  {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>
*/
    
/*     
        // Approach01 using if/else statements
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Vladimr
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
*/

// Not conditional Rendering        
/*
        return (
            <div>
                <div>Welcome Vladimir</div>
                <div>Welcome Guest</div>
            </div>
        )
*/
    }
}

export default UserGreeting