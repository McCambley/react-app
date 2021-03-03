import React, { useState } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState(
    {
      person: [
        {name: 'Jake', age: 29},
        {name: 'Eddie', age: 32},
        {name: 'Holly', age: 24},
      ], 
      otherState: 'some other value'
    }
  );

  console.log(personsState)

  const switchNameHandler = () => {
    // console.log('Was Clicked!');
    // DONT DO THIS!!! this.state.person[0].name = 'George Jacob';
    setPersonsState({
      person: [
        {name: 'George', age: 29},
        {name: 'Edward', age: 26},
        {name: 'Holly Chase', age: 26},
      ],
      otherState: personsState.otherState
    })
  } 

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <h2>This is really working!</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age}>I'm the author of this app</Person>
      <Person name={personsState.person[1].name} age={personsState.person[1].age}/>
      <Person name={personsState.person[2].name} age={personsState.person[2].age}/>
    </div>
  );
};

export default app;

/* state = {
  person: [
    {name: 'Jake', age: 29},
    {name: 'Eddie', age: 32},
    {name: 'Holly', age: 24},
  ]
} */


