import { SET_AUTH_TOKEN, SET_CURRENT_USER } from '../actions/authActions';


const initialState = {
	currentUser: null,
	authToken: null
}

export default function landingReducer(state = initialState, action) {
	if (action.type === SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		})
	}

	if (action.type === SET_CURRENT_USER) {
		return Object.assign({}, state, {
			currentUser: action.currentUser
		})
	}

	// if (action.type === GET_INFO) {
	// 	return Object.assign({}, state, {
	// 		getInfo: action.getInfo
	// 	})
	// }
	return state;
}