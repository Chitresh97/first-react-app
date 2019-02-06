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
    ],
    showPersons: false

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
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  namechangedHandler=(event)=>{
    this.setState({
      persons: [
        {name:'Maximilian', age:28},
        {name: event.target.value, age:101},
        {name:'conman', age:56},
      ]
    })
  }
  render() {
    const style={
      // Different format of css because inside JS.
      backgroundColor: 'green',
      border: '1px solid blue',
      padding: '20px'
    };

    let persons=null;
    if(this.state.showPersons){
      persons=(        
      <div>
        {this.state.persons.map(person=>{
          return <Person 
            name={person.name}
            age={person.age}
            // click which stores the reference to switchnameHandler is also passed as prop.
            click={this.switchnameHandler}
            changed={this.namechangedHandler}/>
            

        })}
        {/* Using the person component, self closing tag */}
        {/* <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        {/* Children property- elements between opening and closing tag of component */}
        {/* <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person  
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */ }
      </div>
      )
    }
    return (
      <div className="App">
        <h1>Hello</h1>
        {/* don't add brackets in function call otherwise it'll be called as soon as DOM is rendered */}
        <button 
          style={style} 
          onClick={this.togglePersonHandler}>Click here</button>
          {persons}

      </div>
    );
  }
}

export default App;
