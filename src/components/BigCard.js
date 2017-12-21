import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import HopModal from './HopModal'

import './BigCard.css';

export class BigCard extends React.Component {
	constructor() {
		super()

		this.state = {
			modalIsOpen: false
		}

		this.openModal = this.openModal.bind(this);
    	this.closeModal = this.closeModal.bind(this);

	}

	openModal() {
    	this.setState({modalIsOpen: true});
  	}

 
  	closeModal() {
    	this.setState({modalIsOpen: false});
 	}

 	postHopinion(beerId, userId) {
 		console.log('winning', this.text.value, beerId, userId)
 	}


//make sure user ID makes into the state
//make s

 	render() {

 		const currentBeerId = this.props.currentBeerData
		const bigCardId = this.props.beerData.filter(beerId => beerId.id === currentBeerId)
		return bigCardId.map(details => {
			const defaultImg = require('./beer.jpg')
			const bigCardLabel = details.labels && details.labels.medium ? details.labels.medium : defaultImg
			return ( 
		 		<div>
					{<Modal
	  				isOpen={this.state.modalIsOpen}
	  				setAppElement={'.hopinion-modal'}
					>
						<HopModal />
					</Modal>}

					<div className="bigCardContainer">
						<div className="details-container">
							<h1>{details.name}</h1>
							<h2>{details.style.name}</h2>
							<h2>{details.description}</h2>
							<img className="big-label" src={bigCardLabel} alt="big-label"/>
							<h2>ABV: {details.abv}</h2>
							<h2>IBU: {details.ibu}</h2>
							<h2>{details.releaseDate}</h2>
							<input type="submit" value="Add Hopinion" className="add-hopinion" onClick={this.openModal} />
						</div>
					</div>
				</div>
			)
		})
	}




	// render() {

		// const bigCardContent = this.props.currentBeerData ? this.renderBigCard() : '';

		// return (
			// <div>
				// {bigCardContent}
			// </div>
		// )
	// }
}

const mapStateToProps = state => ({
	currentBeerData: state.display.currentBeer,
	beerData: state.display.beerData,
	userId: state.auth.currentUser
})

export default connect(mapStateToProps)(BigCard);
