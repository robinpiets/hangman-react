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

		const { word, guesses } = this.props

		return (
			<div className="letter-results">
				<div className="word-result">
					{word.split("").map(this.renderGuess.bind(null, guesses))}
				</div>
				<div className="guessed-letters">
					Guessed letters: {guesses.map(this.renderGuessedLetters)}
				</div>
			</div>
		)
	}
}

export default HangmanLetters
