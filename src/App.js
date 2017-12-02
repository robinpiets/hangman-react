import React, { Component } from 'react';
import './App.css';
import HangmanContainer from './hangman/HangmanContainer'
import { connect } from 'react-redux'
import store from './store'
import newGuess from './actions/actions'

class App extends Component {

  handleKeyPress = (event) => {
    const key = event.key
    if (key.match(/[a-z]/i)) {
      // console.log(key);
      this.props.newGuess(key)
    }
  }

  render() {

  	const words = ['Pijnboompit', 'Alvleesklier', 'Snelkookpan', 'Hinkstapsprong', 'Maanzaadbrood', 'Doordrukstrip'];
  	const word = words[Math.floor(Math.random()*words.length)];
    // const guesses = []
    const { guesses } = this.props || []
    // console.log( guesses );
    // if (!guesses && guesses.length > 0) {
      // const guesses = []
    // }

    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyPress}>
        <header className="App-header">
          <h1 className="App-title">Hangman in React</h1>
        </header>
        <main>
          <HangmanContainer word={word} guesses={guesses} />
        </main>
      </div>
    );
  }
}

export default connect(null, { newGuess })(App)
