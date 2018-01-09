import React from 'react';
import { connect } from 'react-redux';
import HopModal from './HopModal';


export function HopModalWrapper(props) {
	return (
		<div>
			<HopModal 
				currentBeerId={props.currentBeerId}
				currentBeerName={props.currentBeerName}
				beerData={props.beerData}
				userId={props.userId}
			/>
		</div>		
	)
}

const mapStateToProps = state => ({
	currentBeerId: state.display.currentBeer,
	currentBeerName: state.display.currentBeerName,
	beerData: state.display.beerData,
	userId: state.auth.currentUser
})
export default connect(mapStateToProps)(HopModalWrapper);