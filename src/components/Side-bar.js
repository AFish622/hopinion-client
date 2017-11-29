import React from 'react';
import { connect } from 'react-redux';


import SideBreweries from './SideBrew';
import './Side-bar.css'

export class SideBar extends React.Component {


		render() {

			return (
				<div className="side-bar"  >
					<SideBreweries  onClick={''}/>
					<SideBreweries />
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


export default connect()(SideBar);


