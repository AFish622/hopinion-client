import React from 'react';

import './Login.css'

export default class SignUp extends React.Component {
	render() {
		return (
			<div className="login-container">
				<div class="head">
					<p>Login</p>
				</div>

				<form class="login-form">
          			<input type="text" placeholder="username" />
          			<input type="text" placeholder="password" />
          			<input type="subbit" class="signup-submit" value="Sign in" />
        		</form>

        		<div class="form-links">
          			<p>Don't have an account?<span class="register-link"> Register</span></p>
        		</div>
			</div>
		)
	}
}