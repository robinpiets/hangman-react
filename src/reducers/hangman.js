// src/reducers/hangman.js
import { GUESS } from '../actions/actions'

const words = ['doordrukstrip', 'hangbuikzwijn', 'blokfluitles', 'alvleesklier', 'snelkookpan', 'hinkstapsprong', 'maanzaadbrood'];
const randomNum = Math.floor(Math.random()*words.length);
const word = words[randomNum];
console.log(randomNum + 1);
const guesses = []

export default (state = { word, guesses }, {type, payload} = {}) => {
	// console.log('state = ',state, 'payload:',payload);
	switch (type) {
		case GUESS :
			const { word, guesses } = state
			if ( guesses.indexOf(payload) !== -1 ) {
                console.log('You already gave this answer');
            } else {
                // push the guess
				const newArray = guesses.concat()
				console.log( newArray.push(payload) );

                return { word, guesses: newArray }
            }

		default :
			return state
	}
}
