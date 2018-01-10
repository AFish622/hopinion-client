import { normalizeResponseErrors } from './utils'
import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

export const postHopinion = (values, beerId, userId, beerName) => dispatch => {
		return (
		fetch(`${API_BASE_URL}/hopinion/`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({values, beerId, userId, beerName})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
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

export const getHopinions = (userId) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/hopinion/${userId}`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			data: JSON.stringify({userId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({hopinions}) => dispatch(HopinionSuccess(hopinions)))
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

export const HOPINION_SUCCESS = 'HOPINION_SUCCESS';
export const HopinionSuccess = hopinions => ({
	type: HOPINION_SUCCESS,
	hopinions,
})

export const HOPINION_DELETE = 'HOPINION_DELETE';
export const hopinionDelete = hopinion => ({
	type: HOPINION_DELETE,
	hopinion,
})

export const deleteHopinion = hopId => dispatch => {
	return (
		fetch(`${API_BASE_URL}/hopinion/${hopId}`, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({hopId}) => dispatch(hopinionDelete(hopId)))
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

export const updateHopinion = (hopId, text) => dispatch => {
	
	return (
		fetch(`${API_BASE_URL}/hopinion/update/${hopId}`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({text})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
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



