import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProtectedData } from '../actions/protectedDataActions';

import SideBar from './SideBar';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';

export class SignUp extends React.Component {
	ComponentDidMount() {
		if (!this.props.loggedIn) {
			return;
		}
		this.props.dispatch(fetchProtectedData())
	}

	render() {
		// if (!this.props.loggedIn) {
		// 	return <Redirect to="/" />
		// }

		return (
			<div>
				<SideBar />
				<NavBar />
				<Jumbotron />
				<div><p>username: {this.props.username}</p></div>
				<div><p>name: {this.props.username}</p></div>
				<div><p>protectedData: {this.props.protectedData}</p></div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { currentUser } = state.auth; // the entire auth state object??
	return {
		loggedIn: currentUser !== null,
		username: currentUser ? state.auth.currentUser.username : '', // creating an object off of the currunt user object
		name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : '',
		protectedData: state.protectedData.data
	};
};

export default connect(mapStateToProps)(SignUp);