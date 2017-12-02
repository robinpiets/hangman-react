import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import HangmanLetters from './HangmanLetters'

class HangmanContainer extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {

		const words = ['Pijnboompit', 'Alvleesklier', 'Snelkookpan', 'Hinkstapsprong', 'Maanzaadbrood', 'Doordrukstrip'];
		const word = words[Math.floor(Math.random()*words.length)];
		const guesses = ['a','b','c','d','e','f']


		return (
			<div className="hangman-container">

				<HangmanLetters word={word} guesses={guesses} />
			</div>
		)
	}
}

export default HangmanContainer
