import { 
		UPDATE_JUMBO,
		TOGGLE_HOP_MODAL,
		FETCH_BREW_DATA_SUCCESS,
		FETCH_BEER_DATA_SUCCESS,
		SET_CURRENT_BEER,
		SET_CURRENT_BEER_NAME,
		HOPINION_BEER_INFO_SUCCESS
} from '../actions/displayActions';

const initialState = {
	jumbotron: 'map',
	toggleHopModal: false,
	breweryData: '',
	beerData: '',
	currentBeer: '',
	currentBeerName: '',
	error: null,
	beerInfo: ''
}

export default function reducer(state = initialState, action) {
	if (action.type === UPDATE_JUMBO) {
		return Object.assign({}, state, {
			jumbotron: action.toDisplay
		})
	}

	else if (action.type === TOGGLE_HOP_MODAL) {
		return Object.assign({}, state, {
			toggleHopModal: true
		})
	}

	else if (action.type === SET_CURRENT_BEER) {
		return Object.assign({}, state, {
			currentBeer: action.currentBeer
		})
	}

	else if (action.type === SET_CURRENT_BEER_NAME) {
		return Object.assign({}, state, {
			currentBeerName: action.currentBeerName
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

	else if (action.type === HOPINION_BEER_INFO_SUCCESS) {
		return Object.assign({}, state, {
			beerInfo: action.beerInfo
		})
	}

	return state;
}
