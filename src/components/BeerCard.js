import React from 'react';
import { connect } from 'react-redux';
import { updateJumbo } from '../actions/displayActions'

import './BeerCard.css'

export function BeerCard(props) {
		console.log(props)
		return (
			<div className="beerCard" onClick={() => props.dispatch(updateJumbo('bigCard'))} >
				<p>Beer Name</p>
				<p>Beer Logo</p>
				<p>Beer Style</p>
			</div>
		)
}

export default connect()(BeerCard);