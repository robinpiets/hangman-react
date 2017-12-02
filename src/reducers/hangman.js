// src/reducers/hangman.js

import { GUESS } from '../actions/actions'
const initialState = []

export default function (state = initialState, { type, payload } = {}) {
	switch (type) {
		case GUESS :
			console.log('GUESS!');
			// payload.slice(0, 10)
	  		return payload
		default :
			return state
	}
}
