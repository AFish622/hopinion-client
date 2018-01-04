import React from 'react';
import { connect } from 'react-redux';


import SideBreweries from './SideBrew';
import './SideBar.css'

export class SideBar extends React.Component {
	renderBreweries() {
		return this.props.brewData.map((brewery, index) => {
			const defaultImg = 'http://game-icons.net/icons/delapouite/originals/svg/hops.svg'
			const logo = brewery.brewery.images && brewery.brewery.images.squareMedium ? brewery.brewery.images.squareMedium : defaultImg
				return <SideBreweries key={index} id={brewery.brewery.id}
			 			name={brewery.brewery.name} logo={logo} 
			 		/>
		})
	}

	render() {
		const breweryContent = this.props.brewData ? this.renderBreweries() : ''
		
		return (
			<div className="side-bar"  >
				{breweryContent}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	brewData: state.display.breweryData
})

export default connect(mapStateToProps)(SideBar);


