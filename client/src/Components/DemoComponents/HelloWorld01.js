/*
Function Components:
- Simple functions (receiving props and returning declarations)
- Use as much as possible
- Pro: Absence of 'this' keyword
- Pro: Solution without using state
- Mainly responsible for the UI
- AKA Stateless/ Dumb/ Presentational

SEE HelloWorld02 for Class Components

LOOK INTO "HOOKS":
- React v16.7.0 introduce hooks, allowing for states to be used within
functional components.
- Use 'import { useState } from 'react';'
*/

import React from 'react';


function HelloWorld01() {
    return <h1>Hello, World!</h1>
}

export default HelloWorld01;


/*
// Simplier*** way to create a component
export const HelloWorld = () => <h1>Hello, World!</h1>

Note that if you include export in the same line as the component
rather than a seperate 'export default HelloWorld', this will prevent
you from importing the file into App.js using any name.
So, if you were to decided to import the file with the name 'Greetings'
The above code will prevent you from doing this.
*/

/*
In app.js you can either call the component like so,
<HelloWorld01></HelloWorld01>
OR
<helloWorld /> 
if there is no content between tag
*/