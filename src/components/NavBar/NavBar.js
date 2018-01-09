import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';

import { clearAuthToken } from '../../localStorage';
import { setCurrentUser, setAuthToken } from '../../actions/authActions';
import { searchBrew, updateJumbo } from '../../actions/displayActions';
import { getHopinions } from '../../actions/hopinionActions';
import { getCoordinates } from '../../actions/mapActions';
import Input from '../Input/Input'
import './NavBar.css'

export class NavBar extends React.Component {
	constructor() {
		super()

		this.State = {
			searchValue: 'san francisco'
		}

	}

	logOut() {
		this.props.dispatch(setCurrentUser(null));
		this.props.dispatch(setAuthToken(null));
		clearAuthToken();
	}

	handleInfoClick() {
		this.props.dispatch(updateJumbo('info'));
	}

	onSearch(value) {
		console.log(value)
		this.props.dispatch(searchBrew(value));
		this.props.dispatch(getCoordinates(value));
		this.props.dispatch(updateJumbo('map'));
    }

    getHopinions(userId) {
    	this.props.dispatch(updateJumbo('myHopinion'));
    	this.props.dispatch(getHopinions(userId));
    }

    burgerToggle() {
    	let burgerElement = document.querySelector('.burger-links');
	  	if (burgerElement.style.display === 'block') {
	        burgerElement.style.display = 'none';
	    } 

	    else {
	        burgerElement.style.display = 'block';
	    }
    }
	
	render() {
		let logOutButton;
		if (this.props.loggedIn) {
            logOutButton = (
                <li className="log-out-button" onClick={() => this.logOut()}>Log out</li>
            );
        }

		return (
			<div className="nav-bar">
				<nav>
					<img src={require('../images/Hopinion.png')} className="title" alt=""/>

					<form onSubmit={this.props.handleSubmit(input => this.onSearch(input['main-search']))}>
						<Field  name="main-search" component={Input} type="text"
						 id="main-search" placeholder="search cities" />

						<button id='button-holder'>
    						<img src='https://png.icons8.com/metro/540/search.png' alt="search-icon" />
						</button>
					</form>


					<ul className="nav-list">
						{logOutButton}
						<li className="get-started-button" onClick={() => this.handleInfoClick()}> Get Started </li>
						<li className="my-hopinions-button" onClick={() => this.getHopinions(this.props.currentUser.id)}>My Hopinion</li>
					</ul>

					<div className="burger-nav">
						<i className="fa fa-bars fa-2x" onClick={this.burgerToggle} ></i>
						<div className="burger-links">
							<ul className="burger-list">
								<li className="burger-bullets" onClick={() => this.getHopinions(this.props.currentUser.id)}>My Hopinion</li>
								<li className="burger-bullets" onClick={() => this.handleInfoClick()}>Get Started</li>
								<li className="burger-bullets" onClick={() => this.logOut()}>Log Out</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}


export default reduxForm({
    form: 'search',
    onSubmitFail: (errors, dispatch) =>
    	dispatch(focus('search', Object.keys(errors)[0]))
})(NavBar);
		
