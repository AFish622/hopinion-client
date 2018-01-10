import { UPDATE_COORDINATES, updateCoordinates } from './mapActions';

describe('updateCoordinates', () => {
	it('should return the action', () => {
		const lat = '-204.198'
		const lng = '167.433'
		const action = updateCoordinates(lat, lng);
		expect(action.type).toEqual(UPDATE_COORDINATES)
		expect(action.lat).toEqual(lat);
		expect(action.lng).toEqual(lng);
	})
})