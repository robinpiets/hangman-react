import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import HangmanContainer from './hangman/HangmanContainer'
import store from './store'
import addNewGuess from './actions/actions'

class App extends Component {

  handleKeyPress = (event) => {
    const key = event.key
    if (key.length == 1 && key.match(/[a-z]/i)) {
      this.props.addGuessToProp(key)
    }
  }

  render() {
    const { guesses, word, rightGuesses, wrongGuesses } = this.props.hangman
    if (!guesses || !word) return null

    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyPress}>
        <header className="App-header">
          <h1 className="App-title">Hangman in React</h1>
        </header>
        <main>
          <HangmanContainer word={word} guesses={guesses} rightGuesses={rightGuesses} wrongGuesses={wrongGuesses} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ hangman }) => ({ hangman })
const mapDispatchToProps = { addGuessToProp: addNewGuess }

export default connect(mapStateToProps, mapDispatchToProps)(App)
