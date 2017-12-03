// src/reducers/hangman.js
import { GUESS } from '../actions/actions'

const words = ['doordrukstrip', 'optelsom', 'blokfluitles', 'alvleesklier', 'snelkookpan', 'hinkstapsprong', 'maanzaadbrood'];
const randomNum = Math.floor(Math.random()*words.length);
const word = words[randomNum];
console.log(randomNum + 1);
console.log(word);
const guesses = []
const rightGuesses = 0
const wrongGuesses = 0
const won = false
const lost = false

export default (state = { word, guesses, rightGuesses, wrongGuesses, won, lost }, {type, payload} = {}) => {
	// console.log('state = ',state, 'payload:',payload);
	switch (type) {
		case GUESS :
			console.log('guessing..');
			const { word, guesses, rightGuesses, wrongGuesses, won, lost } = state
			if ( guesses.indexOf(payload) !== -1 ) {
                console.log('You already gave this answer');
            } else {

                // push the guess
				const newGuesses = guesses.concat()
				newGuesses.push(payload)

				// define right and wrong guesses
				const wordArray = word.split("")
				const newRightGuesses = wordArray.filter(x => newGuesses.indexOf(x) !== -1)
				console.log('newRightGuesses:',newRightGuesses);

				const uniqueRightGuesses = newRightGuesses.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    			const newWrongGuesses = newGuesses.length - uniqueRightGuesses.length
				console.log('newWrongGuesses:',newWrongGuesses);

                return { word, guesses: newGuesses, rightGuesses: newRightGuesses, wrongGuesses: newWrongGuesses, won, lost }
            }

		default :
			return state
	}
}
