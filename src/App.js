import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h2>This is really working!</h2>
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
