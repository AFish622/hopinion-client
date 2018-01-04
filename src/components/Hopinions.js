import React from 'react';
import { connect } from 'react-redux'

import { searchBeer } from '../actions/displayActions';
import { updateHopinion, deleteHopinion } from '../actions/hopinionActions'
import './Hopinions.css'

export class Hopinions extends React.Component  {
	constructor() {
		super()
		this.hopinionText = {}
	}

	handleDelete(id) {
 		this.props.dispatch(deleteHopinion(id))
 	}

 	
 	handleUpdate(id, text) {
 		this.props.dispatch(updateHopinion(id, text))
 	}

 	getHopinionBeer(beerId) {
 		this.props.dispatch(searchBeer(beerId))		
 	}

	render() {
		const displayHopinions = () => {
			return this.props.hopinions.map((hopinion, i) => {
				const date = hopinion.date.slice(0, 10)
				return (
					<div className="hopinions-container" key={hopinion._id} >
						<h1 className="beer-name" onClick={() => this.getHopinionBeer(hopinion.beerId)} >{hopinion.beerName}</h1>
						<div className="hopinion-rating">
							<h2>Rating: {hopinion.rating}</h2>
						</div>
						<textarea ref={input => this.hopinionText[i] = input} className="hopinion-comments">
							{hopinion.text}	
				 		</textarea>
				 		<p className="hop-date">Date Added: {date}</p>
					 	<div className="hopinion-links-container">
							<button onClick={() => this.handleDelete(hopinion._id)} >Delete</button> 
							<button onClick={() => this.handleUpdate(hopinion._id, this.hopinionText[i].value)} >Edit</button>
						</div>
					</div>
				)
			})

		}

		return(
			<div>
				{displayHopinions()}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser,
	hopinions: state.hopinion.hopinions
})

export default connect(mapStateToProps)(Hopinions)
