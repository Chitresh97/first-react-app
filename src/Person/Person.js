import React from 'react'
//importing react so that React.createElement() can be called, it is done by build workflow.
//No need to import component because we are not creating class that inherits component class.

//Component is basically a function returning JSX

import './Person.css';
// importing stylesheet
const person=(props)=>{
    //one argument is passed by default which is an object containg all properties(attributes of component)
    return (
    <div className="Person">
        <p onClick={props.click}>My name is {props.name}, I am {props.age} years old.</p>
        {/* Children property- elements between opening and closing tag of component*/}
        <p>{props.children}</p> 
        <input type="text" onChange={props.changed}/>
    </div>
    )
    //content inside {} is executed as JS. It is used to run dynamic content in JSX.
};

export default person;