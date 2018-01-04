import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from './Login';


export function LoginWrapper(props) {
	const toDisplay = () => {
		if (props.currentUser) {
			return <Redirect to="/dashboard" />	
		}
		return <Login />
	}

	return (
		<div>{ toDisplay() }</div>		
	)
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(LoginWrapper);