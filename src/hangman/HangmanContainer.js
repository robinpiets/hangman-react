import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HangmanLetters from './HangmanLetters'
import HangmanHanging from './HangmanHanging'

class HangmanContainer extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {

		const { word, guesses } = this.props

		return (
			<div className="hangman-container">
				<HangmanHanging guesses={guesses} />
				<HangmanLetters word={word} guesses={guesses} />
			</div>
		)
	}
}

export default HangmanContainer
