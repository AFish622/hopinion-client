import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { setCurrentUser, setAuthToken } from '../actions/authActions';
import { clearAuthToken } from '../localStorage';
import { searchBrew } from '../actions/displayActions'


import Input from './Input'


import './NavBar.css'

export class NavBar extends React.Component {
	logOut() {
		this.props.dispatch(setCurrentUser(null));
		this.props.dispatch(setAuthToken(null));
		clearAuthToken();
	}

	onSearch(value) {
		return this.props.dispatch(searchBrew(value))
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
					<h1 className="title">Hopinion</h1>

					<form onSubmit={this.props.handleSubmit(input => this.onSearch(input['main-search']))}>
						<Field  name="main-search" component={Input} type="text"
						 id="main-search" placeholder="search cities" />
						<button id='button-holder'>
    						<img src='https://png.icons8.com/metro/540/search.png' alt="search-icon" />
						</button>
					</form>


					<ul className="nav-list">
						{logOutButton}
						<li>Info</li>
						<li>My Hopinion</li>
					</ul>
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
		
