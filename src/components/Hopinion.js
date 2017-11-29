import React from 'react';

import './Hopinion.css'

export default function Hopinion(props) {
	return(
		<div className="hopinion-container">
			<h1>Beer Name</h1>
			<div className="review">
				<input type="text" placeholder="tell us what you think" class="hopinion-text" />
				<p>Rate it</p>
				<div id="slideContainer">
  					<input type="range" min="1" max="100" value="0" class="slider" />
				</div>
			</div>
			<input type="submit" value="Post Hopinion" />
		</div>
	)
}