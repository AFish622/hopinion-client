import { 
		UPDATE_JUMBO,
		HOP_MODAL,
		FETCH_BREW_DATA_SUCCESS,
		FETCH_BEER_DATA_SUCCESS,
		SET_CURRENT_BEER
} from '../actions/displayActions';

const initialState = {
	jumbotron: 'map',
	toggleHopModal: false,
	breweryData: '',
	beerData: '',
	currentBeer: '',
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

	else if (action.type === SET_CURRENT_BEER) {
		return Object.assign({}, state, {
			currentBeer: action.currentBeer
		})
	}

	else if (action.type === FETCH_BREW_DATA_SUCCESS) {
		return Object.assign({}, state, {
			breweryData: action.breweryData,
			error: null
		})

	}

	else if (action.type === FETCH_BEER_DATA_SUCCESS) {
		return Object.assign({}, state, {
			beerData: action.beerData
		})
	}

	// else if (action.type === FETCH_BREW_DATA_ERROR) {
	// 	return Object.assign({}, state, {
	// 		error: action.error
	// 	})
	// }

	return state;
}
