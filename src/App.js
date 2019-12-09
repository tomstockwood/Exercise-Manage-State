import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
  state = {
    numQuestions : 0,
    numCorrect : 0
  }
  
increaseNumQuestions = () => {
  this.setState((currentState) => ({
    numQuestions : currentState.numQuestions + 1
  }))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick = {() => this.increaseNumQuestions()} 
          >True</button>
          <button onClick = {() => this.increaseNumQuestions()}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
          Hello world!!?
        </div>
      </div>
    );
  }
}

export default App;
