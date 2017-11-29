import {BEER_CARD, UPDATE_JUMBO} from '../actions/displayActions';

const initialState = {
	displayBeerCard: false,
	displayBigCard: false,
	jumbotron: 'map'
}

export default function reducer(state = initialState, action) {
	if (action.type === BEER_CARD) {
		return Object.assign({}, state, {
			displayBeerCard: true,
			displayBigCard: false
		});
	}

	else if (action.type === UPDATE_JUMBO) {
		return Object.assign({}, state, {
			jumbotron: action.toDisplay
		})
	}

	return state;
}
