import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class HangmanLetters extends PureComponent {
	static propTypes = {
		// ...
	}

	renderGuess(guesses, letter, index, rest) {

		let returnLetter = "_"
        if ( guesses.indexOf(letter) > -1 ) returnLetter = letter

		return <span key={index} className="letter">{returnLetter}</span>
	}

	render() {

		const { word, guesses } = this.props


		return (
			<div className="hangman-letters">
				{word.split("").map(this.renderGuess.bind(null, guesses))}
			</div>
		)
	}
}

export default HangmanLetters
