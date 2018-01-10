import landingReducer from './authReducer';
import { setAuthToken, setCurrentUser } from '../actions/authActions';

describe('landingReducer', () => {
	const currentUser = 'AMF';
	const authToken = '123456789';

	it('should set the initial state when nothing is passed in', () => {
		const state = landingReducer(undefined, {type: '__UNKOWN'});
		expect(state).toEqual({
			currentUser: null,
			authToken: null
		})
	})

	it('should return the current state on an unknown action', () => {
		let currentState = {};
		const state = landingReducer(currentState, {type: '__UNKOWN'});
		expect(state).toBe(currentState)
	})

	describe('setAuthToken', () => {
		it('should set the auth token', () => {
			let state;
			state = landingReducer(state, setAuthToken(authToken));
			expect(state).toEqual({
				authToken: authToken,
				currentUser: null
			})
		})
	})

	describe('setCurrentUser', () => {
		it('should set the current user', () => {
			let state;
			state = landingReducer(state, setCurrentUser(currentUser));
			expect(state).toEqual({
				authToken: null,
				currentUser: currentUser
			})
		})
	})
})
