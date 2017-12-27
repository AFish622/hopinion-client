import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';
import { getCoordinates } from './mapActions'

export const UPDATE_JUMBO = 'UPDATE_JUMBO';
export const updateJumbo = toDisplay => ({
	type: UPDATE_JUMBO,
	toDisplay,
})

export const HOP_MODAL = 'HOP_MODAL';
export const toggleHopModal = hopModal => ({
	type: HOP_MODAL,
	hopModal
})


export const searchBrew = query => dispatch => {
		dispatch(getCoordinates(query));
	return (
		fetch(`${API_BASE_URL}/search/breweries`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({query})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(fetchBrewDataSuccess(data)))
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


export const displayBeerCards = breweryId => dispatch => {
	return (
		fetch(`${API_BASE_URL}/search/beers`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({breweryId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({data}) => dispatch(fetchBeerDataSuccess(data)))
		.then(dispatch(updateJumbo('beerCard')))
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

export const SET_CURRENT_BEER = 'SET_CURRENT_BEER';
export const setCurrentBeer = currentBeer => ({
	type: SET_CURRENT_BEER,
	currentBeer
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
