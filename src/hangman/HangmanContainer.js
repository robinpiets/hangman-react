import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HangmanLetters from './HangmanLetters'
import HangmanHanging from './HangmanHanging'
import HangmanState from './HangmanState'

class HangmanContainer extends PureComponent {

	render() {

		const { word, guesses, rightGuesses, wrongGuesses } = this.props

		return (
			<div className="hangman-container">
				<HangmanState />
				<HangmanHanging guesses={guesses} wrongGuesses={wrongGuesses} />
				<HangmanLetters word={word} guesses={guesses} rightGuesses={rightGuesses} wrongGuesses={wrongGuesses} />
			</div>
		)
	}
}

export default HangmanContainer
