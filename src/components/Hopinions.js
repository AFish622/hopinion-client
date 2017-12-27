import React from 'react';
import { connect } from 'react-redux'

import { postHopinion, updateHopinion, deleteHopinion } from '../actions/hopinionActions'
import './Hopinions.css'

export class Hopinions extends React.Component  {

	handleDelete() {
 		this.props.dispatch(deleteHopinion())
 	}

 	
 	handleUpdate() {
 		this.props.dispatch(updateHopinion())
 	}

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
					<div className="hopinion-links-container">
						<button onClick={this.handleDelete()} >Delete</button>
						<button onClick={this.handleUpdate()} >Edit</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Hopinions)
