/*
// Note: The map() method creates a new array with the results of calling a provided function on every element in the claling array.
Demo: Array.map()
    var array1 = [1, 4, 9, 16];
    
    //pass a function to map
    const map1 = array1.map(x=> x * 2);

    console.log(map1);
    // expected output: Array[2, 8, 18, 32]
*/

// Refer to Person.js


import React from 'react';
import Person from './Person'; // './Components/Person' gave me errors
// More complex way to display a list
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
}

/*
// Simple code to display a list
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div>
}
*/

export default NameList