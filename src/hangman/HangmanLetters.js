import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class HangmanLetters extends PureComponent {
	static propTypes = {
		// ...
	}

	showGuess(word, guesses) {
	    const wordArray = word.split("")
		// .map(function(x){
	    //     if ( guesses.indexOf(x) > -1 ) return x
	    //     else return '_'
	    // })
	    // return wordArray.join(' ')
		// return <li key={index}>{topic.topic} <span>({topic.counter})</span></li>
	}

	renderGuess(input, index, iets1) {
		console.log(input, index, iets1);
		// console.log(input);
		// var newWord = wordArray.map(function(x){
	    //     if ( guesses.indexOf(x) > -1 ) return x
	    //     else return '_'
	    // })
		// console.log(this.props);
		return <span key={index} className="letter">{input}</span>
	}

	render() {

		const { word, guesses } = this.props


		return (
			<div className="hangman-letters">
				{word.split("").map(this.renderGuess, guesses)}
				{word.split("").map(this.renderGuess, guesses)}
			</div>
		)
	}
}

export default HangmanLetters
