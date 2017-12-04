import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class HangmanLetters extends PureComponent {
	static propTypes = {
		// ...
	}

	renderGuessedLetters(guess, index, next) {
		return (
			<span key={index} className="guess">
				{ index != 0 && ', ' }
				{guess}
			</span>
		)
	}
	renderGuess(guesses, letter, index, rest) {

		let returnLetter = "_"
        if ( guesses && guesses.length > 0 && guesses.indexOf(letter) > -1 ) returnLetter = letter

		return <span key={index} className="letter">{returnLetter}</span>
	}

	render() {

		const { word, guesses, wrongGuesses, rightGuesses } = this.props

		return (
			<div className="letter-results">
				<div className="word-result">
					{word.split("").map(this.renderGuess.bind(null, guesses))}
				</div>
				<div className="guessed-letters">
					{guesses.length > 0 && 'Guessed letters: '}<br/>
					{guesses.map(this.renderGuessedLetters)}
				</div>
				{guesses.length > 0 && <div className="guessed-count">Total guesses: {guesses.length}</div> }
				{wrongGuesses > 0 && <div className="wrong-guessed-count">Total wrong guesses: {wrongGuesses} / 6</div> }
			</div>
		)
	}
}

export default HangmanLetters
