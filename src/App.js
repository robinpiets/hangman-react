import React, { Component } from 'react';
import './App.css';
import HangmanContainer from './hangman/HangmanContainer'
import { connect } from 'react-redux'
import store from './store'

class App extends Component {

  handleKeyPress = (event) => {
    const key = event.key
    if (key.match(/[a-z]/i)) {
      // console.log(key);
      this.setState({
        guess: key
      })
    }

    // guesses.on('action', payload => store.dispatch(payload))
  }

  render() {

  	const words = ['Pijnboompit', 'Alvleesklier', 'Snelkookpan', 'Hinkstapsprong', 'Maanzaadbrood', 'Doordrukstrip'];
  	const word = words[Math.floor(Math.random()*words.length)];
    const guesses = []

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

// export default App;

const mapStateToProps = ({ guesses }) => ({ guesses })

export default connect(mapStateToProps)(App)
