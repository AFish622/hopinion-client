import React from 'react';
import { connect } from 'react-redux'

import BeerCard from './BeerCard';
import BigCard from './BigCard';
import Info from './Info';
import GoogleMapWrapper from './GoogleMapWrapper';
import { MyHopinion } from './myHopinion';


import './Jumbotron.css'

export class Jumboton extends React.Component {



	render() {
		const displayJumbo = () => {
			if (this.props.jumbotron === 'map') {
				return (
					 <GoogleMapWrapper 
					 	isMarkerShown
						googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `100%` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					 />
				)
			}

			else if (this.props.jumbotron === 'beerCard') {
				return <BeerCard />
			}

			else if (this.props.jumbotron === 'bigCard') {
				return <BigCard />
			}

			else if (this.props.jumbotron === 'myHopinion') {
				return <MyHopinion />
			}

			else if (this.props.jumbotron === 'info') {
				return <Info />
			}
		}

		return (
			<div className="jumbotron">
				{displayJumbo()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	jumbotron: state.display.jumbotron
})

export default connect(mapStateToProps)(Jumboton)