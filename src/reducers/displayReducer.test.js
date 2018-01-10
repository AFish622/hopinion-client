import displayReducer from './mapReducer';
import { updateJumbo,
		 toggleHopModal,
		 setCurrentBeer,
		 setCurrentBeerName,
		 fetchBrewDataSuccess,
		 fetchBeerDataSuccess,
		 hopinionBeerInfoSuccess
 		} 
from '../actions/displayActions';

describe('displayReducer', () => {
	const toDisplay = 'map';
	const hopModal = false;
	const currentBeer = 'IPA';
	const currentBeerName = 'Summer Ale';
	const breweryData = 'BREWERY DATA';
	const beerData = 'BEER DATA';
	const beerInfo = 'Anchor';

	it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = displayReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('updateJumbo', () => {
    	it('should update the jumbotron', () => {
    		let state = {
    			jumbotron: toDisplay
    		}

    		expect(state).toEqual({
    			jumbotron: toDisplay
    		})
    	})
    })

    describe('toggleHopModal', () => {
    	it('should toggle the hop modal open', () => {
    		let state = {
    			toggleHopModal: hopModal
    		}

    		expect(state).toEqual({
    			toggleHopModal: hopModal
    		})
    	})
    })

    describe('setCurrentBeer', () => {
    	it('should set the current beer value', () => {
    		let state = {
    			currentBeer: currentBeer
    		}

    		expect(state).toEqual({
    			currentBeer: currentBeer
    		})
    	})
    })

    describe('setCurrentBeerName', () => {
    	it('it should set the current beer name', () => {
    		let state = {
    			currentBeerName: currentBeerName
    		}

    		expect(state).toEqual({
    			currentBeerName: currentBeerName
    		})
    	})
    })

    describe('fetchBrewDataSuccess', () => {
    	it('should update the brewery data', () => {
    		let state = {
    			breweryData: breweryData,
    			error: null
    		}
    	})
    })

    describe('fetchBeerDataSuccess', () => {
    	it('should update the beer data', () => {
    		let state = {
    			beerData: beerData
    		}

    		expect(state).toEqual({
    			beerData: beerData
    		})
    	})
    })

    describe('hopinionBeerInfoSuccess', () => {
    	it('should get beer info', () => {
    		let state = {
    			beerInfo: beerInfo
    		}

    		expect(state).toEqual({
    			beerInfo: beerInfo
    		})
    	})
    })
})