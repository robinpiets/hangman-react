// src/reducers/hangman.js
import { GUESS } from '../actions/actions'

const words = ['taxi', 'bank', 'computer', 'react', 'redux', 'javascript', 'codaisseur'];
const randomNum = Math.floor(Math.random()*words.length);
const word = words[randomNum];
console.log(randomNum + 1);
console.log(word);
const guesses = []
const rightGuesses = 0
const wrongGuesses = 0
const won = false
const lost = false

function isWinner(word, guesses) {
    var wordArray = word.split("")
    var rightGuess = wordArray.filter(x => guesses.indexOf(x) > -1)
    return rightGuess.length == wordArray.length
}
function isLoser(wrongGuesses) {
    if ( wrongGuesses > 5 ) return true
}

export default (state = { word, guesses, rightGuesses, wrongGuesses, won, lost }, {type, payload} = {}) => {
	switch (type) {
		case GUESS :
			// console.log('guessing..');
			const { word, guesses, rightGuesses, wrongGuesses, won, lost } = state

			if ( isWinner(word, guesses) ) return state;
			if ( isLoser(wrongGuesses) ) return state;

			if ( guesses.indexOf(payload) !== -1 ) {
                console.log('You already gave this answer');
            } else {

                // push the guess
				const newGuesses = guesses.concat()
				newGuesses.push(payload)

				// define right and wrong guesses
				const wordArray = word.split("")
				const newRightGuesses = wordArray.filter(x => newGuesses.indexOf(x) !== -1)
				// console.log('newRightGuesses:',newRightGuesses);

				const uniqueRightGuesses = newRightGuesses.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    			const newWrongGuesses = newGuesses.length - uniqueRightGuesses.length
				// console.log('newWrongGuesses:',newWrongGuesses);

				if ( isWinner(word, newGuesses) ) {
					console.log('winner!');
				}
				if ( isLoser(newWrongGuesses) ) {
					console.log('LOSER');
				}

				return { word, guesses: newGuesses, rightGuesses: newRightGuesses, wrongGuesses: newWrongGuesses }
			}

		default :
			return state
	}
}
