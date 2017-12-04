import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class HangmanState extends PureComponent {


	render() {
		return (
			<div className="hangman-state">
				{this.props.won}
				{this.props.lost}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const wordArray = state.hangman.word.split("")
	const rightGuess = wordArray.filter(x => state.hangman.guesses.indexOf(x) > -1)

	return {
		won: (rightGuess.length == wordArray.length) ? 'You won!!' : '',
		lost: (state.hangman.wrongGuesses >= 6) ? 'You died. The word was: ' + state.hangman.word  : ''
	}
}

export default connect(mapStateToProps)(HangmanState)
