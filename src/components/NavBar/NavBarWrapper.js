import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';

export function NavBarWrapper(props) {
	return (
		<div>
			<NavBar 
				loggedIn={props.loggedIn}
				currentUser={props.currentUser}
				errorMessage={props.errorMessage}
			/>
		</div>		
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser,
	errorMessage: state.display.errorMessage
})

export default connect(mapStateToProps)(NavBarWrapper);