import React from 'react';
import Modal from 'react-modal';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, length } from '../validators';
import { connect } from 'react-redux';

import Input from './Input'
import './HopModal.css'

export class HopModal extends React.Component {
	constructor() {
		super()

		this.state = {
			modalIsOpen: false
		}

		this.openModal = this.openModal.bind(this);
    	this.closeModal = this.closeModal.bind(this);

	}

	openModal() {
    	this.setState({modalIsOpen: true});
  	}

 
  	closeModal() {
    	this.setState({modalIsOpen: false});
 	}

 	postHopinion(values, beerId, userId) {
 		console.log('winning', this.props.currentBeerId)
 	}

	// ref the modal
	// call action to fetch endpoint
	// store data in DB

	render() {

		return(
				<div className="hopinion-modal">
					<div className="hopModal-container">

						<button className="closeInfoModal" onClick={this.closeModal}>X</button>

						<h1>Beer Name</h1>

						<div className="review">
							<form onClick={this.props.handleSubmit(values => this.postHopinion(values, this.props.currentBeerId, this.props.userId))}>
								<Field
								 	name="review" type="text" placeholder="Tell us what you think" 
								  	component={Input} validate={[required, nonEmpty, length({min: 2, max: 200})]}
								/>

								<p>Rate it</p>

								{/*<Field
								 	name="first-name" type="text" 
								  	component={Input} validate={[required]}
								/>*/}

								<div id="slideContainer">
									<input type="range" min="1" max="100" value="0" class="slider" />
								</div>

								<button className="hopModal-submit" type="submit" 
									disabled={this.props.pristine || this.props.submitting}>
									Submit
								</button>
								{/*<input type="submit" value="Post Hopinion" onClick={() => this.handleSubmit(this.props.currentBeerId, this.props.userId)}/>*/}
							</form>
						</div>
					</div>
				</div>	
		)
	}
}

const mapStateToProps = state => ({
	currentBeerId: state.display.currentBeer,
	beerData: state.display.beerData,
	userId: state.auth.currentUser
})


export default reduxForm({
    form: 'hopinion'
})(HopModal);

