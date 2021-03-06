import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import hangmanImage from '../images/hangman.png';

class HangmanHanging extends PureComponent {
	static propTypes = {
		// ...
	}

	renderHangman(wrongGuesses) {
		var renders = []
		// console.log('render:', wrongGuesses);
		for (var i = 1; i < (wrongGuesses + 1); i++) {
			renders.push( <div key={i} className={"hanging-part rendered render-" + i}></div> )
		}
		if (wrongGuesses > 5) {
			renders.push( <img key="12" src={hangmanImage} className="hanging-part rendered render-hangman" /> )
		}
		return renders;
	}

	render() {

		const { word, guesses, wrongGuesses } = this.props
		// console.log(wrongGuesses);

		return (
			<div className="hangman-hanging">
				{this.renderHangman(wrongGuesses)}
			</div>
		)
	}
}

export default HangmanHanging
