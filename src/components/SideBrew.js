import React from 'react';
import { displayBeerCards } from '../actions/displayActions';
import { connect } from 'react-redux';
import './SideBrew.css'

export class SideBreweries extends React.Component {

	clickOnBrewery() {
		return this.props.dispatch(displayBeerCards(this.props.id))
	}

	render() {
		return (
			<div className="breweryContainer" onClick={(input) => this.clickOnBrewery() }>
				<h2>
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