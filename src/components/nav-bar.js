import React from 'react';

import SideBar from './Side-bar'
import './Nav-bar.css'

export default class NavBar extends React.Component {
	
	render() {
		return (
			<div className="nav-bar">
				<nav role="navigation">
					<h1 className="title">Hopinion</h1>

					<input type="text" class="main-search" placeholder="search breweries" />

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
		
