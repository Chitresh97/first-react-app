import React from 'react'
//importing react so that React.createElement() can be called, it is done by build workflow.
//No need to import component because we are not creating class that inherits component class.

//Component is basically a function returning JSX
const person=()=>{
    return <p>I'm a person, I am {Math.floor(Math.random()*30)}.</p>
    //content inside {} is executed as JS. It is used to run dynamic content inJSX.
};

export default person;