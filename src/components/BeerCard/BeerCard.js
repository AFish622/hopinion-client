import React from 'react';
import { connect } from 'react-redux';

import { updateJumbo, setCurrentBeer, setCurrentBeerName } from '../../actions/displayActions';


import './BeerCard.css'

export class BeerCard extends React.Component {

		renderBeerCards() {
			return this.props.beerData.map((beer, index) => {
				const defaultImg = require('../images/beer.jpg');
				const label = beer.labels && beer.labels.large ? beer.labels.large : defaultImg

				return <div className='beerCard' key={index} onClick={(input) => this.clickOnBeerCard(beer.id, beer.name)}>
							<p>{beer.name}</p>
							<p>Style: {beer.style.shortName}</p>
							<p>ABV: {beer.abv}%</p>
							<img className="beer-image" src={label} alt="beerLabel"/>
						</div>
			})
		}

		clickOnBeerCard(id, beerName) {
			this.props.dispatch(setCurrentBeer(id))
			this.props.dispatch(setCurrentBeerName(beerName))
			this.props.dispatch(updateJumbo('bigCard'))
		}	

		render() {
			const beerCardContent = this.props.beerData ? this.renderBeerCards() : ''

			return (   
				<div className="card-container">
					{beerCardContent}
				</div>
			)
		}
}


const mapStateToProps = state => ({
	beerData: state.display.beerData,
	currentBeer: state.display.currentBeer
})

export default connect(mapStateToProps)(BeerCard);