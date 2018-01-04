import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProtectedData } from '../actions/protectedDataActions';

import SideBar from './SideBar';
import NavBarWrapper from './NavBarWrapper';
import Jumbotron from './Jumbotron';

export class SignUp extends React.Component {
	ComponentDidMount() {
		if (!this.props.loggedIn) {
			return;
		}
		this.props.dispatch(fetchProtectedData())
	}



	render() {


		if (!this.props.loggedIn) {
			return <Redirect to="/" />
		}


		return (
			<div>
				<SideBar />
				<NavBarWrapper />
				<Jumbotron />
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth; 
	return {
		loggedIn: currentUser !== null,
		username: currentUser ? state.auth.currentUser.username : '',
		name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : ''
	};
};

export default connect(mapStateToProps)(SignUp);