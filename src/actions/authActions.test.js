import { SET_AUTH_TOKEN, setAuthToken, SET_CURRENT_USER, setCurrentUser } from './authActions';

describe('setAuthToken', () => {
	it('should return the action', () => {
		const authToken = '123456789'
		const action = setAuthToken(authToken);
		expect(action.type).toEqual(SET_AUTH_TOKEN)
		expect(action.authToken).toEqual(authToken);
	})
})

describe('setCurrentUser', () => {
	it('should return the action', () => {
		const currentUser = 'user1'
		const action = setCurrentUser(currentUser);
		expect(action.type).toEqual(SET_CURRENT_USER)
		expect(action.currentUser).toEqual(currentUser);
	})
})