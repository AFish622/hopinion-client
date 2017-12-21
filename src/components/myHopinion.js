import React from 'react';
import { connect } from 'react-redux';
import Hopinions from './Hopinions';

import './myHopinion.css'

export	 class MyHopinion extends React.Component  {

	render() {
		return(
			<div>
				<div className="myHop-header">
						<img className="myHop-logo" src={require('./Hopinion.png')} alt="myHop-logo"/>
					<div className="myHop-data">
						<h2>Austin Fisher</h2>
						<h2>22 Hopinions</h2>
					</div>
				</div>
				<Hopinions />
			</div>
		)
	}
}

export default connect()(MyHopinion)
