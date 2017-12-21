import { UPDATE_COORDINATES } from '../actions/mapActions';

const initialState = {
	lat: 37.7749,
	lng: -122.4194
};

export default function reducer(state = initialState, action) {
	if (action.type === UPDATE_COORDINATES) {
		return Object.assign({}, state, {
			lat: action.lat,
			lng: action.lng
		});
	}
	return state;
}