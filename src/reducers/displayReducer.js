import { UPDATE_JUMBO, HOP_MODAL, FETCH_BREW_DATA_SUCCESS } from '../actions/displayActions';

const initialState = {
	jumbotron: 'map',
	toggleHopModal: false,
	data: ''
}

export default function reducer(state = initialState, action) {
	if (action.type === UPDATE_JUMBO) {
		return Object.assign({}, state, {
			jumbotron: action.toDisplay
		})
	}

	else if (action.type === HOP_MODAL) {
		return Object.assign({}, state, {
			toggleHopModal: true
		})
	}

	else if (action.type === FETCH_BREW_DATA_SUCCESS) {
		return Object.assign({}, state, {
			data: action.data,
			query: ''
		})
	}

	return state;
}
