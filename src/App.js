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
      // console.log('0: props:',this.props);
      // console.log('1: pressed:',key);
      this.props.addGuessToProp(key)
      // console.log('4: props:',this.props);
    }
  }

  render() {
    const { guesses, word } = this.props.hangman
    // console.log('guesses in app:',guesses);
    if (!guesses || !word) return null

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

const mapStateToProps = ({ hangman }) => ({ hangman })
const mapDispatchToProps = { addGuessToProp: addNewGuess }

export default connect(mapStateToProps, mapDispatchToProps)(App)

//
// export default connect(null, mapDispatchToProps)(App)


// export default connect(null, { newGuess })(App)

// const mapStateToProps = ({ newGuess }) => ({ newGuess })
// export default connect(mapStateToProps)(App)/
