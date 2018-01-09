import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';



import './Landing.css';

export class Landing extends React.Component {

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
		if (this.props.loggedIn) {
 			return <Redirect to="/dashboard" />
 		}

		return (
			<div>
				<Modal
	  				isOpen={this.state.modalIsOpen}
	  				setAppElement={'.landing-page'}
				>
					<div className="landing-modal">
						<button className="closeInfoModal" onClick={this.closeModal}>X</button>
		  				<h1>Features and Functionality</h1>

		  				<h2>Discover Local Beers</h2>
		  				<p>Once you sign in, search any city and discover local breweries
		  				by navigating the map or searching through the side bar</p>

		  				<h2>Find the Right Beer for You</h2>
		  				<p>Seach through any brewery and get a list of all beers and specfic
		  				details about each beer and when they are available</p>

		  				<h2>Know Exactly What You're Ordering</h2>
		  				<p>Find out what other users think of each beer by viewing
		  				their Hopinion, or add your own Hopinion to share with others.</p>

		  				<h2>Keep Track of Your Hopinions</h2>
		  				<p>Once you have added your Hopinion on a beer, navigate to 
		  				your personalized Hopinion page to recall tasting notes and ratings of
		  				beers you've had.</p>
		  			</div>
				</Modal>				

			<div className="landing-page">
				<div className="landing-head">
					<div>
						<ul className="landing-nav">
							<li className="landing-list"><Link to="/login" >Log in</Link></li>
							<li className="landing-list"><Link to="/signup">Sign Up</Link></li>
							<img src={require('../images/Hopinion.png')} className="landing-title" alt=""/>
						</ul>
					</div>


					<div className="statement">
						<h1>Find out what the locals like</h1>
						<p>Hopinion is a user based application that allows you to discover
						breweries and beers in a location and get user feedback about those beers. 
						Create an account and get started!</p>
					</div>

			
					<div className="landing-inputs">
						<Link to="/login">
							<input type="submit" value="Log in" className="landing-signup" />
						</Link>

						<input type="submit" value="How it Works" className="info" onClick={this.openModal} />
					</div>
				</div>

				<div className="first-row">
					<div className="bullet-1">
						<h3>Search anywhere</h3>
						<p>Detailed information on breweries and beers in the area are only a click away.
						Type in the Hopinion search box and naviagte the map or sidebar to get a full listing
						of breweries, and individual beer information</p>
						<img className="mock-up1" src={require('../images/mock-up1.png')} alt="mock-up1"/>
					</div>
				</div>

				<div className="second-row">
					<div className="bullet-2">
						<h3>Learn all you need to know about local beers</h3>
						<p>Never worry about asking for recoommendations again. Hopinion provides user ratings
						and feedback on local beers and breweries</p>
					</div>
					<img className="mock-up2" src={require('../images/mock-up3.png')} alt="mock-up1"/>
				</div>

				<div className="third-row">
					<div className="bullet-3">
						<h3>Add, view or update your Hopinion</h3>
						<p>Give your own input on beers that you have tried, and easily access and manage them 
						through the "My Hopinion" page</p>
					</div>
					<img className="mock-up3" src={require('../images/mock-up2.png')} alt="mock-up1"/>
				</div>

			</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Landing);