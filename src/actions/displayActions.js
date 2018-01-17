import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';
import { getCoordinates } from './mapActions';

export const UPDATE_JUMBO = 'UPDATE_JUMBO';
export const updateJumbo = toDisplay => ({
	type: UPDATE_JUMBO,
	toDisplay,
})



export const TOGGLE_HOP_MODAL = 'TOGGLE_HOP_MODAL';
export const toggleHopModal = hopModal => ({
	type: TOGGLE_HOP_MODAL,
	hopModal
})


export const searchBrew = query => dispatch => {
	return (
		fetch(`${API_BASE_URL}/search/breweries`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({query})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => {
			if (!data) {
				return dispatch(setError(query))
			}
			dispatch(getCoordinates(query));
			dispatch(fetchBrewDataSuccess(data))
		})
		.catch(err => {
			const { code } = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({
						_error: 'Incorrect username or password'
					})
				);
			}
		})
	)
}


export const breweryBeers = breweryId => dispatch => {
	return (
		fetch(`${API_BASE_URL}/search/breweryBeers`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({breweryId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(fetchBeerDataSuccess(data)))
		.catch(err => {
			const { code } = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({
						_error: 'Incorrect username or password'
					})
				);
			}
		})
	)
}

export const searchBeer = beerId => dispatch => {
	
	return (
		fetch(`${API_BASE_URL}/search/beers`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({beerId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(hopinionBeerInfoSuccess(data)))
		.then(dispatch(updateJumbo('bigCard')))
		.catch(err => {
			const { code } = err;
			if (code === 401) {
				return Promise.reject(
					new SubmissionError({
						_error: 'Incorrect username or password'
					})
				);
			}
		})
	)
}

export const SET_ERROR = 'SET_ERROR';
export const setError = query => ({
	type: SET_ERROR,
	query
})

export const CLEAR_ERROR = 'CLEAR_ERROR'
export const clearError = message => ({
	type: CLEAR_ERROR,
	message
})

export const SET_CURRENT_BEER = 'SET_CURRENT_BEER';
export const setCurrentBeer = currentBeer => ({
	type: SET_CURRENT_BEER,
	currentBeer
})

export const SET_CURRENT_BEER_NAME = 'SET_CURRENT_BEER_NAME';
export const setCurrentBeerName = currentBeerName => ({
	type: SET_CURRENT_BEER_NAME,
	currentBeerName
})

export const FETCH_BREW_DATA_SUCCESS = 'FETCH_BREW_DATA_SUCCESS';
export const fetchBrewDataSuccess = breweryData => ({
	type: FETCH_BREW_DATA_SUCCESS,
	breweryData
})

export const FETCH_BEER_DATA_SUCCESS = 'FETCH_BEER_DATA_SUCCESS';
export const fetchBeerDataSuccess = beerData => ({
	type: FETCH_BEER_DATA_SUCCESS,
	beerData
})

export const HOPINION_BEER_INFO_SUCCESS = 'HOPINION_BEER_INFO_SUCCESS';
export const hopinionBeerInfoSuccess = beerInfo => ({
	type: HOPINION_BEER_INFO_SUCCESS,
	beerInfo
})

