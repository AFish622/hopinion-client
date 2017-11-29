import React from 'react';

import './BeerCard.css'

export default class BeerCard extends React.Component {
	render() {

		return (
			<div className="beerCard">
				<p>Beer Name</p>
				<p>Beer Logo</p>
				<p>Beer Style</p>
			</div>
		)
	}
}