// src/reducers/hangman.js

import { GUESS } from '../actions/actions'

export default function (state = [], { type, payload } = {}) {
	console.log('state = ',state, 'payload:',payload);
	switch (type) {
		case GUESS :
			// console.log(payload);
			if ( state.indexOf(payload) !== -1 ) {
                console.log('You already gave this answer');
            } else {
                state.push(payload)
            }
	  		return state
		default :
			return state
	}
}
