import React from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom';


export function SignUpWrapper(props) {
	const toDisplay = () => {
		if (props.currentUser) {
			return <Redirect to="/dashboard" />
		}
		return <SignUp />
	}

	return (
		<div>{ toDisplay() }</div>		
	)
}

const mapStateToProps = state => ({
	currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(SignUpWrapper);