import React, { Component } from 'react';
import './App.css';
import HangmanContainer from './hangman/HangmanContainer'

class App extends Component {

  handleKeyPress = (event) => {
    console.log(event.key);
  }

  render() {
    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyPress}>
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
