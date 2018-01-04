import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import HopModalWrapper from './HopModalWrapper'

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


 	render() {

 		const renderBigCard = () => {
		 	if (this.props.beerData) {
			 			const currentBeerId = this.props.currentBeerData	
						const bigCardId = this.props.beerData.filter(beerId => beerId.id === currentBeerId)
						return bigCardId.map(details => {
							console.log('deets', details)
							const defaultImg = require('./beer.jpg')
							const bigCardLabel = details.labels && details.labels.medium ? details.labels.medium : defaultImg
							return ( 
					 			<div key={details.id}>
									<Modal
				  					isOpen={this.state.modalIsOpen}
				  					setAppElement={'.hopinion-modal'}
									>
										<HopModalWrapper />
									</Modal>

									<div className="bigCardContainer">
										<div className="details-container">
											<h1>{details.name}</h1>
											<h2>{details.style.name}</h2>
											<h2>{details.description}</h2>
											<img className="big-label" src={bigCardLabel} alt="big-label"/>
											<h2>ABV: {details.abv}</h2>
											<h2>IBUs: {details.style.ibuMax}</h2>
											<input type="submit" value="Add Hopinion" className="add-hopinion" onClick={this.openModal} />
										</div>
									</div>
								</div>
							)
						})
					}
				else if (this.props.beerInfo) {
					const beerInfo = this.props.beerInfo
					const defaultImg = require('./beer.jpg')
					const label = beerInfo.labels && beerInfo.labels.medium ? beerInfo.labels.medium : defaultImg
					return (
						<div className="infoCardContainer">
							<div className="info-container">
								<h1>{beerInfo.name}</h1>
								<h2>{beerInfo.style.name}</h2>
								<h2>{beerInfo.description}</h2>
								<img className="big-label" src={label} alt="big-label"/>
								<h2>ABV: {beerInfo.abv}</h2>
								<h2>IBUs: {beerInfo.style.ibuMax}</h2>
							</div>
						</div>
					)

				}
	}


 		return (
 			<div>
 				{renderBigCard()}
 			</div>
		)
	}


}

const mapStateToProps = state => ({
	currentBeerData: state.display.currentBeer,
	beerData: state.display.beerData,
	userId: state.auth.currentUser,
	beerInfo: state.display.beerInfo
})

export default connect(mapStateToProps)(BigCard);
