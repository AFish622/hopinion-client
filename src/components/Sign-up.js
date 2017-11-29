import React from 'react';
import NavBar from './Nav-bar';

import './Sign-up.css'

export default class SignUp extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="signup-container">
					<div class="head">
						<p>Sign Up</p>
					</div>

					<form class="signup-form">
          				<input type="text" placeholder ="first name" />
          				<input type="text" placeholder="last name" />
          				<input type="text" placeholder="username" />
          				<input type="text" placeholder="password" />
          				<input type="text" placeholder="confirm password" />
          				<input type="subbit" class="signup-submit" value="Submit" />
        			</form>

        			<div class="form-links">
          				<p>Alreadt have an account?<span class="login-link"> Login</span></p>
        			</div>
				</div>
			</div>
		)
	}
}