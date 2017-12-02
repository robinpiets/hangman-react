import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HangmanLetters from './HangmanLetters'

class HangmanContainer extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {

		const { word, guesses } = this.props

		return (
			<div className="hangman-container">

				<HangmanLetters word={word} guesses={guesses} />
			</div>
		)
	}
}

export default HangmanContainer
