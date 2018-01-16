import { HOPINION_SUCCESS, HOPINION_DELETE } from '../actions/hopinionActions';

const initialState = {
	hopinions: []
}

export default function reducer(state = initialState, action) {
	if (action.type === HOPINION_SUCCESS) {
		return Object.assign({}, state, {
			hopinions: action.hopinions
		});
	}

	if (action.type === HOPINION_DELETE) {
		const filtered = state.hopinions.filter(hopinion => hopinion._id !== action.hopinion)
		console.log('ACTIONS', action)
		return Object.assign({}, state, {
			hopinions: filtered
		});
	}

	return state;
}