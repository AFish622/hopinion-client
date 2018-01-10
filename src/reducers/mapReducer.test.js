import mapReducer from './mapReducer';
import { updateCoordinates } from '../actions/mapActions';

describe('mapReducer', () => {
	const lat = -433.127
	const lng = 128.422

	it('should set the initial state when nothing is passed in', () => {
		const state = mapReducer(undefined, {type: '__UNKOWN'});
		expect(state).toEqual({
			lat: 37.7749,
			lng: -122.4194
		})
	})

	it('should return the current state on an unkown action', () => {
		let currenState = {};
		const state = mapReducer(currenState, {type: '__UNKOWN'});
		expect(state).toBe(currenState);
	})

	describe('updateCoordinates', () => {
		let state;
		state = mapReducer(state, updateCoordinates(lat, lng));
		expect(state).toEqual({
			lat: lat,
			lng: lng
		})
	})
})

