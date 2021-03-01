import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: 'Jake', age: 29},
      {name: 'Eddie', age: 32},
      {name: 'Holly', age: 24},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h2>This is really working!</h2>
        <button>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>I'm the author of this app</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Person name="Cam" age="24"/>
      </div>
    );
  }
}

export default App;
