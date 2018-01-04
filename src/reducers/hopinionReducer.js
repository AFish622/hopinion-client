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
		return Object.assign({}, state, {
			hopinions: state.hopinions.filter(hopinion => hopinion._id !== action.hopId)
		});
	}

	return state;
}