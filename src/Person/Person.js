import React from 'react'
//importing react so that React.createElement() can be called, it is done by build workflow.
//No need to import component because we are not creating class that inherits component class.

//Component is basically a function returning JSX
const person=()=>{
    return <p>I'm a person.</p>
}

export default person;