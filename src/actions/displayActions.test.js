import { UPDATE_JUMBO,
		 updateJumbo,
		 TOGGLE_HOP_MODAL,
		 toggleHopModal,
		 SET_CURRENT_BEER,
		 setCurrentBeer,
		 SET_CURRENT_BEER_NAME,
		 setCurrentBeerName,
		 FETCH_BREW_DATA_SUCCESS,
		 fetchBrewDataSuccess,
		 FETCH_BEER_DATA_SUCCESS,
		 fetchBeerDataSuccess,
		 HOPINION_BEER_INFO_SUCCESS,
		 hopinionBeerInfoSuccess
		} 
from './displayActions';

describe('updateJumbo', () => {
	it('should return the action', () => {
		const toDisplay = 'map'
		const action = updateJumbo(toDisplay);
		expect(action.type).toEqual(UPDATE_JUMBO)
		expect(action.toDisplay).toEqual(toDisplay);
	})
})

describe('toggleHopModal', () => {
	it('should return the action', () => {
		const hopModal = 'off'
		const action = toggleHopModal(hopModal);
		expect(action.type).toEqual(TOGGLE_HOP_MODAL)
		expect(action.hopModal).toEqual(hopModal);
	})
})

describe('setCurrentBeer', () => {
	it('should return the action', () => {
		const currentBeer = 'IPA'
		const action = setCurrentBeer(currentBeer);
		expect(action.type).toEqual(SET_CURRENT_BEER)
		expect(action.currentBeer).toEqual(currentBeer);
	})
})

describe('setCurrentBeerName', () => {
	it('should return the action', () => {
		const currentBeerName = 'Anchor'
		const action = setCurrentBeerName(currentBeerName);
		expect(action.type).toEqual(SET_CURRENT_BEER_NAME)
		expect(action.currentBeerName).toEqual(currentBeerName);
	})
})

describe('fetchBrewDataSuccess', () => {
	it('should return the action', () => {
		const breweryData = 'BREWERYDATA'
		const action = fetchBrewDataSuccess(breweryData);
		expect(action.type).toEqual(FETCH_BREW_DATA_SUCCESS)
		expect(action.breweryData).toEqual(breweryData);
	})
})

describe('fetchBeerDataSuccess', () => {
	it('should return the action', () => {
		const beerData = 'BEERDATA'
		const action = fetchBeerDataSuccess(beerData);
		expect(action.type).toEqual(FETCH_BEER_DATA_SUCCESS)
		expect(action.beerData).toEqual(beerData);
	})
})

describe('hopinionBeerInfoSuccess', () => {
	it('should return the action', () => {
		const beerInfo = 'Session IPA'
		const action = hopinionBeerInfoSuccess(beerInfo);
		expect(action.type).toEqual(HOPINION_BEER_INFO_SUCCESS)
		expect(action.beerInfo).toEqual(beerInfo);
	})
})
