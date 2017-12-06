import React from 'react';

import './NavBar.css'

export default class NavBar extends React.Component {
	
	render() {
		return (
			<div className="nav-bar">
				<nav>
					<h1 className="title">Hopinion</h1>

					<input type="text" className="main-search" placeholder="search cities" />

					<ul className="nav-list">
						<li>Log Out</li>
						<li>Info</li>
						<li>My Hopinion</li>
					</ul>
				</nav>
			</div>
		);
	}
}
		
