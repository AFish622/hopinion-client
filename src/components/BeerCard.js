import React from 'react';

import './BeerCard.css'

export default class BeerCard extends React.Component {
	render() {

		return (
			<div className="beerCard">
				<p>Beer Name</p>
				<p>Syle</p>
				<p>ABV</p>
				<p>Beer Logo</p>
			</div>
		)
	}
}