import React from 'react';

import SideBreweries from './SideBrew';
import './Side-bar.css'

export default class SideBar extends React.Component {
		render() {
			return (
				<div className="side-bar">
					<SideBreweries />
					<SideBreweries />
					<SideBreweries />
					<SideBreweries />
					<SideBreweries />
					<SideBreweries />
					<SideBreweries />
				</div>
			);
	}
}



