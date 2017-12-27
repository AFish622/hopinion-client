import React from 'react';
import { connect } from 'react-redux';

import { updateJumbo, setCurrentBeer } from '../actions/displayActions';


import './BeerCard.css'

export class BeerCard extends React.Component {

		renderBeerCards() {
			return this.props.beerData.map((beer, index) => {
				const defaultImg = require('./beer.jpg');
				const label = beer.labels && beer.labels.large ? beer.labels.large : defaultImg

				return <div className='beerCard' key={index} onClick={(input) => this.clickOnBeerCard(beer.id)}>
							<p>{beer.name}</p>
							<p>Style: {beer.style.shortName}</p>
							<p>ABV: {beer.abv}%</p>
							<img className="beer-image" src={label} alt="beerLabel"/>
						</div>
			})
		}

		clickOnBeerCard(id) {
			this.props.dispatch(setCurrentBeer(id))
			this.props.dispatch(updateJumbo('bigCard'))
			// return this.props.beerData.map(details => {
			// 	console.log('working', this.props.beerData)
			// 	return <BigCard key ={details.id} id={details.id} name={details.nameDisplay}
			// 		style={details.style.shortName} description={details.style.description} abv={details.abv} 
			// 		ibu={details.style.ibuMax} release={details.createDate}  />
			// })
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