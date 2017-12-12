import React from 'react';
import { Link } from 'react-router-dom'

import './Login.css'

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="login-body">
				<div className="login-container">
					<div className="head">
						<p>Login to Hopinion</p>
					</div>

					<div className="form-container">
						<form className="login-form">
		          			<input type="text" placeholder="username" />
		          			<input type="text" placeholder="password" />
		          			<input type="subbit" className="signup-submit" value="Sign in" />
		        		</form>

		        		<div className="form-links">
		          			<p>Don't have an account?<Link to="/signup" className="register-link"> Register</Link></p>
		        		</div>
		        	</div>
				</div>
			</div>
		)
	}
}