import React from 'react';

import './Info.css'

export default class Info extends React.Component {

	render() {
		return (
			<div className="info-modal-container">
				<div className="info-modal">

					<img src={require('../images/black-hopinion.png')} className="info-logo" alt=""/>

	  				<h2 className='get-started'>To get started...</h2>
	  				<ul className="started-list">
		  				<li className="started-bullets">Type in city in the hopinion search box in the top left corner to get 
		  					a list of all breweries and their location in a desired city.
		  				</li>

		  				<li className="started-bullets">
		  					Browse the breweries on the scrollable sidebar, or discover whats around you
		  					with the clickable map markers.
		  				</li>

		  				<li className="started-bullets">
		  					Find a beer that fits you by getting a full listing of all beers that each
		  					brewery, brews. 
		  				</li>

		  				<li className="started-bullets">
		  					Learn about new and old beers by clicking on each beer to get detailed information
		  					including, full description, ABV (Alcohol By Volume), IBU's (International Bitterness Units), 
		  					and OG (Original Gravity).
		  				</li>

		  				<li className="started-bullets">
		  					Click on the add hopinon button to give your Hopinion, and rating on a specific 
		  					beer that you tried.
		  				</li>

		  				<li className="started-bullets">
		  					Revisit your Hopinions by clicking on the link in the top right to view, update, or delete
		  					your old Hopinions.
		  				</li>
	  				</ul>

					

	  			</div>
	  		</div>
	  	)
	}		
}
