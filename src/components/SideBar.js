import React from 'react';
import { connect } from 'react-redux';


import SideBreweries from './SideBrew';
import './SideBar.css'

export class SideBar extends React.Component {
	renderBreweries() {
		console.log('THE DATA', this.props)
		return this.props.brewData.map(brewery => {
			const defaultImg = 'http://game-icons.net/icons/delapouite/originals/svg/hops.svg'
			const logo = brewery.images && brewery.images.medium ? brewery.images.medium : defaultImg
			return <SideBreweries key={brewery.id} id={brewery.id} name={brewery.name} logo={logo} />
		})
	}

	render() {
		const content = this.props.brewData ? this.renderBreweries() : ''
		
		return (
			<div className="side-bar"  >
				{content}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	brewData: state.display.data
})

export default connect(mapStateToProps)(SideBar);


