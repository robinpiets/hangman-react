import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class HangmanHanging extends PureComponent {
	static propTypes = {
		// ...
	}

	renderHangman(guesses, index, total) {
		const part = index + 1
		return <div key={part} className={"hanging-part render-" + part}></div>
	}

	render() {

		const { guesses } = this.props

		return (
			<div className="hangman-hanging">
				{guesses.map(this.renderHangman)}
				{/*guesses.length > 0 && <div className="guessed-count">Total guesses: {guesses.length}</div> */}
			</div>
		)
	}
}

export default HangmanHanging
