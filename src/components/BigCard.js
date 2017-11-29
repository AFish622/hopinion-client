import React from 'react';

import './BigCard.css';

export default class BigCard extends React.Component {
	render() {
		return (
			<div className="bigCardContainer">
				<p>Beer Name</p>
				<p>Style Description</p>
				<p>Bigger Beer Logo</p>
				<p>ABV</p>
				<p>IBU</p>
				<p>availabilty</p>
				<input type="submit" value="Add Hopinion" />
			</div>
		)
	}
}