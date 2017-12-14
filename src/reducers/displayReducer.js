import { 
		UPDATE_JUMBO,
		HOP_MODAL,
		FETCH_BREW_DATA_SUCCESS,
		FETCH_BREW_DATA_ERROR 
} from '../actions/displayActions';

const initialState = {
	jumbotron: 'map',
	toggleHopModal: false,
	data: '',
	error: null
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
			error: null
		})

	}
	else if (action.type === FETCH_BREW_DATA_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		})
	}

	return state;
}
