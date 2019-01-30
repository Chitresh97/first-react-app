import React, { Component } from 'react';
import './App.css';
// importing person component//
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* Using the person component, self closing tag */}
        <Person name="Max" age="29"/>
        {/* Children property- elements between opening and closing tag of component */}
        <Person name="Chitresh" age="21">My hobbies- procrastination</Person>
        <Person name="conman" age="0"/>
      </div>
    );
  }
}

export default App;
