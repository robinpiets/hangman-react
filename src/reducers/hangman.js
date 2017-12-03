// src/reducers/hangman.js
import { GUESS } from '../actions/actions'

const words = ['pijnboompit', 'alvleesklier', 'snelkookpan', 'hinkstapsprong', 'maanzaadbrood', 'doordrukstrip'];
const randomNum = Math.floor(Math.random()*words.length);
console.log(randomNum);
const word = words[randomNum];
const guesses = []

export default (state = { word, guesses }, {type, payload} = {}) => {
	// console.log('state = ',state, 'payload:',payload);
	switch (type) {
		case GUESS :
			const { word, guesses } = state
			return { word, guesses: [payload].concat(guesses) }
		default :
			return state
	}
}
