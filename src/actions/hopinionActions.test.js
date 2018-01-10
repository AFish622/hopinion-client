import { HOPINION_SUCCESS, HopinionSuccess, HOPINION_DELETE, hopinionDelete } from './hopinionActions';

describe('HopinionSuccess', () => {
	it('should return the action', () => {
		const hopinions = '10 hopinions'
		const action = HopinionSuccess(hopinions);
		expect(action.type).toEqual(HOPINION_SUCCESS)
		expect(action.hopinions).toEqual(hopinions);
	})
})

describe('hopinionDelete', () => {
	it('should return the action', () => {
		const hopinion = '12345'
		const action = hopinionDelete(hopinion);
		expect(action.type).toEqual(HOPINION_DELETE)
		expect(action.hopinion).toEqual(hopinion);
	})
})