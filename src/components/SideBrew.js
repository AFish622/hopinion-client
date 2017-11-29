import React from 'react';
import { connect } from 'react-redux';
import { updateJumbo } from '../actions/displayActions'
import './SideBrew.css'

export function SideBreweries(props) {
	console.log('props', props)

	return (
		<div className="breweryContainer">
			<h2 onClick={() => props.dispatch(updateJumbo('everything'))}>Brewery Name</h2>
			<div className="brewLogo">
				<p>Brewery Logo</p>
			</div>
		</div>
	);
}

export default connect()(SideBreweries);