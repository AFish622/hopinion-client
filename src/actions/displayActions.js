import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';

export const UPDATE_JUMBO = 'UPDATE_JUMBO';
export const updateJumbo = toDisplay => ({
	type: UPDATE_JUMBO,
	toDisplay
})

export const HOP_MODAL = 'HOP_MODAL';
export const toggleHopModal = hopModal => ({
	type: HOP_MODAL,
	hopModal
})

export const searchBrew = query => dispatch => {
	
	return (
		fetch(`${API_BASE_URL}/search/breweries`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({query})
		})
		.then(res => console.log(res.json())) // dispatch another function with data, update state, update component
		.then(res => normalizeResponseErrors(res))
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

export const FETCH_BREW_DATA_SUCCESS = 'FETCH_BREW_DATA_SUCCESS'
export const fetchBrewDataSuccess = () => data => ({
	type: FETCH_BREW_DATA_SUCCESS,
	data
})
