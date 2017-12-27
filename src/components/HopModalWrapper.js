import React from 'react';
import { connect } from 'react-redux';
import HopModal from './HopModal';


export function HopModalWrapper(props) {
	return (
		<div>
			<HopModal 
				currentBeerId={props.currentBeerId}
				beerData={props.beerData}
				userId={props.userId}
			/>
		</div>		
	)
}

const mapStateToProps = state => ({
	currentBeerId: state.display.currentBeer,
	beerData: state.display.beerData,
	userId: state.auth.currentUser
})
export default connect(mapStateToProps)(HopModalWrapper);