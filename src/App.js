import React, { Component } from 'react';
import './App.css';
import HangmanContainer from './hangman/HangmanContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman in React</h1>
        </header>
        <main>
          <HangmanContainer />
        </main>
      </div>
    );
  }
}

export default App;
