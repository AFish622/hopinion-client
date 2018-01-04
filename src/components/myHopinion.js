import React from 'react';
import { connect } from 'react-redux';
import Hopinions from './Hopinions';

import './myHopinion.css'

export class MyHopinion extends React.Component  {

	render() {
		console.log('props', this.props)
		return(
			<div>
				<div className="myHop-header">
						<img className="myHop-logo" src={require('./Hopinion.png')} alt="myHop-logo"/>
					<div className="myHop-data">
						<h2>{this.props.currentUser.username}</h2>
						<h2>{this.props.totalHopinions.length} Hopinions</h2>
					</div>
				</div>
				<Hopinions />
			</div>
		)
	}
}


const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	totalHopinions: state.hopinion.hopinions
})

export default connect(mapStateToProps)(MyHopinion)
