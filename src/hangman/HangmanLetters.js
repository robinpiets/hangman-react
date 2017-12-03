import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class HangmanLetters extends PureComponent {
	static propTypes = {
		// ...
	}

	renderGuess(guesses, letter, index, rest) {

		let returnLetter = "_"
        if ( guesses && guesses.length > 0 && guesses.indexOf(letter) > -1 ) returnLetter = letter

		return <span key={index} className="letter">{returnLetter}</span>
	}

	render() {

		const { word, guesses } = this.props

		return (
			<div className="hangman-word-result">
				{word.split("").map(this.renderGuess.bind(null, guesses))}
			</div>
		)
	}
}

export default HangmanLetters
