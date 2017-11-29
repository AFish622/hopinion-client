import React from 'react';

import './Landing.css';

export default class Landing extends React.Component {
	render() {
		return (
			<div>
			<div className="landing-head">
				<div>
					<ul class="landing-nav">
						<li>Sign In</li>
						<li>Sign Up</li>
						<li class="title">Hopinion</li>
					</ul>
				</div>

				<div className="statement">
					<h1>Find out what the locals like</h1>
					<p>Hopinion is an user based application that allows you to discover
					breweries and beers in a location and get user feedback about those beers</p>
				</div>

				<div class="landing-inputs">
					<input type="submit" value="Sign Up" class="landing-signup" />
					<input type="submit" value="How it Works" class="info" />
				</div>
			</div>

			<div class="first-row">
				<div className="bullet-1">
					<h2>Some info about the app</h2>
					<p>Put info about app and a screenshot here</p>
				</div>
			</div>

			<div className="second-row">
				<div className="bullet-2">
					<h2>Some more info about the app</h2>
					<p>Put some more info about the app and a second screenshot</p>
				</div>
			</div>
			</div>
		)
	}
}