/*
JSX (JavaScript XML)
- Extension to the JavaScript language syntax
- Write XML-like code for elements and components
- JSX tags have a tag name, attributes, and children
- JSX is not a necessity to write React applications
- JSX makes your react code simpler and elegant
- JSX ultimatley trasnpiles to pure JavaScript which is
understood by the browsers
*/

import React from 'react';

/*
//Written as JSX
const HelloWorld03 = () => {
    return 
    <div>
        <h1>Hello, World!</h1>;
    </div>
};
*/

//Written as JS
const HelloWorld03 = () => {
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, // adds attribute to element, can be viewed in 'inspect' browser
        React.createElement('h1', null, 'Hello, World!')
    )
}

export default HelloWorld03;