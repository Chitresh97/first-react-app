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
        <Person/>
        <Person/>
        <Person/>
      </div>
    );
  }
}

export default App;
