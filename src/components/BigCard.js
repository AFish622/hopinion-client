import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import './BigCard.css';

export class BigCard extends React.Component {
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


	render() {
		return (
			<div>
				<Modal
  				isOpen={this.state.modalIsOpen}
  				setAppElement={'.hopinion-modal'}
				>
					<div className="hopinion-modal">
						<div className="hopinion-container">
							<button className="closeInfoModal" onClick={this.closeModal}>X</button>
							<h1>Beer Name</h1>
							<div className="review">
								<input type="text" placeholder="tell us what you think" className="hopinion-text" />
								<p>Rate it</p>
								<div id="slideContainer">
  									<input type="range" min="1" max="100" value="0" class="slider" />
								</div>
							</div>
							<input type="submit" value="Post Hopinion" />
						</div>
					</div>
				</Modal>

				<div className="bigCardContainer">
					<p>Beer Name</p>
					<p>Style Description</p>
					<p>Bigger Beer Logo</p>
					<p>ABV</p>
					<p>IBU</p>
					<p>availabilty</p>
					<input type="submit" value="Add Hopinion" className="add-hopinion" onClick={this.openModal} />
				</div>
			</div>
		)
	}
}


export default connect()(BigCard);