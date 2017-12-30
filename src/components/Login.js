import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';

import { } from '../validators';	
import Input from './Input'



import './Login.css'

export class SignUp extends React.Component {
	onSubmit(values) {
	        // const { username, password, firstName, lastName } = values;
	        // const user = { username, password, firstName, lastName };
	        // return this.props
	        //     .dispatch(registerUser(user))
	        //     .then(() => this.props.dispatch(login(username, password)));
	 }

	render() {
		return (
			<div className="login-body">
				<div className="login-container">
					<div className="head">
						<p>Login to Hopinion</p>
					</div>

					<div className="form-container">

						<form className="login-form" onClick={this.props.handleSubmit(values => this.onSubmit(values))}>
		          			<Field
						 		name="username" type="text" value="user"
						  		component={Input} validate={[]}
							/>

		          			<Field
						 		name="password" type="text" value="user"
						  		component={Input} validate={[]}
							/>

		          			<button className="login-submit" type="submit" 
								disabled={this.props.pristine || this.props.submitting}>
								Submit
						</button>
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

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
    	dispatch(focus('login', Object.keys(errors)[0]))
})(SignUp);