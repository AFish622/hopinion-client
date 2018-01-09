import React from 'react';
import { breweryBeers, updateJumbo } from '../../actions/displayActions';
import { connect } from 'react-redux';
import './SideBrew.css'

export class SideBreweries extends React.Component {

	clickOnBrewery() {
		this.props.dispatch(updateJumbo('beerCard'))
		return this.props.dispatch(breweryBeers(this.props.id))
	}

	render() {
		return (
			<div className="breweryContainer" onClick={(input) => this.clickOnBrewery() }>
				<h2 className="side-brew-name">
					{this.props.name}
				</h2>
				<div className="brewLogo">
					<img className="brewLogo" src={this.props.logo} alt={this.props.name}/>
				</div>
			</div>
		);
	}
}



export default connect()(SideBreweries);