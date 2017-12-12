import { API_BASE_URL } from '../config';
import jwtDecode from 'jwt-decode';
import { TextEncoder } from 'text-encoding';
import { fromByteArray } from 'base64-js';
import { SubmissionError } from 'redux-form';
	
import { saveAuthToken, clearAuthToken } from '../localStorage';
import { normalizeResponseErrors } from './utils';




// Starts with store
// Checks local storage for an auth token with LoadAuthToken
// If there is an auth Token dispatch the action setAuthToken which updates the authToken in the reducer.
// Next inside the App When the component first mounts if the user has a token, dispatch refreshAuthToken recieved by mapStateToProps.
// Inside refreshAuthToken we get the current state of the authtoken and make a POST call with fetch with the current AuthToken.
  // decode the response into JSON and disptach the StoreAuthInfo action, that updates the state to the current user and saving the auth 
  //  token or if credentials are bad, dispatch actions to update state to null.
// The storeAuthToken action takes and saves the token to localStorage through the imported saveAuthToken function.

// After the auth token has been resolved, or rejected  the app checks the next props coming(nextprops) in to see if the user is logged in.
// If they are, start a periodic refresh of auth token, if not stop the periodic refresh

// App then renders specfic component based on route (landing if first time) and checks if there is auth token already to redirect directly 
// to the dashboard. If not return to "/".
// If there is then call the fetchProtectedData to get protected information which make a call to the protected endpoint, decodes response
// and then dispatches action for success or action for failure.


export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
})

const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(setCurrentUser(decodedToken.user)) // .user?
	saveAuthToken(authToken);
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
	type: SET_CURRENT_USER,
	currentUser
})


export const refreshAuthToken = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/auth/refresh`, { 
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})	       
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({ authToken }) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err; // why { }?
			if (code === 401) {
				dispatch(setCurrentUser(null));
				dispatch(setAuthToken(null));
				clearAuthToken(authToken);
			}
		});
}

const base64EncodingUTF8 = str => {
    const encoded = new TextEncoder('utf-8').encode(str);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
};

export const login = (username, password) => dispatch => {
	const token = base64EncodingUTF8(`${username}:${password}`);
	
	return (
		fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${token}`
			}
		})
		.then(res => normalizeResponseErrors(res)) 
		.then(res => res.json())
		.then(({ authToken }) => storeAuthInfo(authToken, dispatch))
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
