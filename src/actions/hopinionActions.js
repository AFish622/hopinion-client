import { normalizeResponseErrors } from './utils'
import { API_BASE_URL } from '../config';
import { SubmissionError } from 'redux-form';

export const postHopinion = (values, beerId, userId) => dispatch => {
	console.log('THE DATA', values, beerId, userId)
	return (
		fetch(`${API_BASE_URL}/hopinion/`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({values, beerId, userId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		// .then(({data}) => dispatch(fetchBrewDataSuccess(data)))
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
	console.log('data', userId)
	return (
		fetch(`${API_BASE_URL}/hopinion/`, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({userId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		// .then(({data}) => dispatch(fetchBrewDataSuccess(data)))
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

export const updateHopinion = (userId, beerId, text) => dispatch => {
	// return (
	// 	fetch(`${API_BASE_URL}/hopinion/update`, {
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({userId, beerId, text})
	// 	})
	// 	.then(res => normalizeResponseErrors(res))
	// 	.then(res => res.json())
	// 	// .then(({data}) => dispatch(fetchBrewDataSuccess(data)))
	// 	.catch(err => {
	// 		const { code } = err;
	// 		if (code === 401) {
	// 			return Promise.reject(
	// 				new SubmissionError({
	// 					_error: 'Incorrect username or password'
	// 				})
	// 			);
	// 		}
	// 	})
	// )
}

export const deleteHopinion = (userId, beerId) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/hopinion/delete`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({userId, beerId})
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		// .then(({data}) => dispatch(fetchBrewDataSuccess(data)))
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

