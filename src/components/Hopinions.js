import React from 'react';
import { connect } from 'react-redux'

import './Hopinions.css'

export class Hopinions extends React.Component  {

	render() {
		return(
			<div>
				<div className="hopinions-container">
					<h1>Beer Name</h1>
					<div className="hopinion-rating">
						<h2>Rating</h2>
					</div>
					<div className="hopinion-comments">
					<p>Text text text text text text text text
						text text text text text text text
						text text text text text text text
					</p>	
					</div>
					<p className="hop-date">Date Added</p>
				</div>
			</div>
		)
	}
}

export default connect()(Hopinions)
