import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const value1 = Math.floor(Math.random() * 100);
//const value2 = Math.floor(Math.random() * 100);
//const value3 = Math.floor(Math.random() * 100);
//const sum = value1 + value2 + value3;
//const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
//const numQuestions = 0;
//const numCorrect = 0;

class App extends Component {
  state = {
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100),
    randomValue : Math.floor(Math.random() * 3),
    get sum() {return this.value1 + this.value2 + this.value3},
    get proposedAnswer() {return this.randomValue + this.value1 + this.value2 + this.value3},
    numQuestions : 0,
    numCorrect : 0
  }
  
  checkTrueAnswer = () => {
    if (this.state.proposedAnswer === this.state.sum) {
      this.setState((currentState) => ({numCorrect: currentState.numCorrect + 1}))
    }
    this.increaseNumQuestions()
  }

  checkFalseAnswer = () => {
    if (this.state.proposedAnswer !== this.state.sum) {
      this.setState((currentState) => ({numCorrect: currentState.numCorrect + 1}))
    }
    this.increaseNumQuestions()
  }

  increaseNumQuestions = () => {
  this.setState((currentState) => ({
    numQuestions : currentState.numQuestions + 1,
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100),
    randomValue : Math.floor(Math.random() * 3),
    get sum() {return this.value1 + this.value2 + this.value3},
    get proposedAnswer() {return this.randomValue + this.value1 + this.value2 + this.value3}
    //sum : this.state.value1 + this.state.value2 + this.state.value3,
    //proposedAnswer : Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
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
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick = {() => this.checkTrueAnswer()}>True</button>
          <button onClick = {() => this.checkFalseAnswer()}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
          Hello world!!?
          The sum is {this.state.sum}
          The prop answer is {this.state.proposedAnswer}
          <p>
            value1 = {this.state.value1}
          </p>
          <p>
            value2 = {this.state.value2}
          </p>
          <p>
            value3 = {this.state.value3}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
