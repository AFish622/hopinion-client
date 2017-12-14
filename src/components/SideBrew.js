import React from 'react';
import { updateJumbo, displayBeerCards } from '../actions/displayActions';
import { connect } from 'react-redux';
import './SideBrew.css'

export class SideBreweries extends React.Component {

	clickOnBrewery() {
		console.log('working!!', this.props.id)
		return this.props.dispatch(displayBeerCards(this.props.id))
	}

	render() {
		return (
			<div className="breweryContainer">
				<h2 onClick={(input) => this.clickOnBrewery() }>
					{this.props.name}
				</h2>
				<div className="brewLogo">
					<img src={this.props.logo} alt={this.props.name}/>
				</div>
			</div>
		);
	}
}



export default connect()(SideBreweries);