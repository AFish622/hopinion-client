import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

export function NavBarWrapper(props) {
	return (
		<div>
			<NavBar loggedIn={props.loggedIn} />
		</div>		
	)
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(NavBarWrapper);