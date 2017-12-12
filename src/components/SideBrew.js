import React from 'react';
import { connect } from 'react-redux';
import { updateJumbo } from '../actions/displayActions'
import './SideBrew.css'

export function SideBreweries(props) {

	return (
		<div className="breweryContainer">
			<h2 onClick={() => props.dispatch(updateJumbo('beerCard'))}>Brewery Name</h2>
			<div className="brewLogo">
				<p>Brewery Logo</p>
			</div>
		</div>
	);
}

export default connect()(SideBreweries);