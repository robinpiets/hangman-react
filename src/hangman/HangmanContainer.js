import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HangmanLetters from './HangmanLetters'
import HangmanHanging from './HangmanHanging'

class HangmanContainer extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {

		const { word, guesses, rightGuesses, wrongGuesses } = this.props

		return (
			<div className="hangman-container">
				<HangmanHanging guesses={guesses} wrongGuesses={wrongGuesses} />
				<HangmanLetters word={word} guesses={guesses} rightGuesses={rightGuesses} wrongGuesses={wrongGuesses} />
			</div>
		)
	}
}

export default HangmanContainer
