import React from 'react';
import { connect } from 'react-redux'

import BeerCard from './BeerCard';
import BigCard from './BigCard';
import Hopinion from './Hopinion';

import './Jumbotron.css'

export class Jumboton extends React.Component {



	render() {
		const displayJumbo = () => {
			if (this.props.jumbotron === 'map') {
				return <h1>Map</h1>
			}
			else if (this.props.jumbotron === 'everything') {
				return <BeerCard />
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