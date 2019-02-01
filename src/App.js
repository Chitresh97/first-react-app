import React, { Component } from 'react';
import './App.css';
// importing person component//
import Person from './Person/Person';

class App extends Component {
  //state is a special property available only to components(class) that extends component class.  
  //It's not available in function components.
  //use state less as possible it can make app unpredictable.
  //state is a js object
  state={  
    persons: [
      {name:'Max', age:28},
      {name:'Chitresh', age:21},
      {name:'conman', age:56},
    ]

  }
  //handler is used in name of function to indicate it's a event handler. It is just a convention.
  switchnameHandler=()=>{
    //this keyword can only be used when we use this syntax for function.
    // Special method provided by component class(react library)-
    this.setState({
      persons: [
        {name:'Maximilian', age:28},
        {name:'Chitresh', age:101},
        {name:'conman', age:56},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* don;t add brackets in function call otherwise it'll be called as soon as DOM is rendered */}
        <button onClick={this.switchnameHandler}>Click here</button>
        {/* Using the person component, self closing tag */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        {/* Children property- elements between opening and closing tag of component */}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
