import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, focus } from 'redux-form';

import { } from '../validators';
import { login } from '../actions/authActions'	
import Input from './Input'



import './Login.css'

export class SignUp extends React.Component {
	onSubmit(values) {
		console.log('clicking login', values)
	        const { username, password } = values;
	        return this.props.dispatch(login(username, password))
	 }

	 goToDemoAccount() {
	        return this.props.dispatch(login('testing', '123'))
	 }

	render() {
		
		return (
			<div className="login-body">
				<div className="login-container">
					<div className="head">
						<p>Login to Hopinion</p>
					</div>

					<div className="form-container">

						<form className="login-form">
							<label htmlFor="username">Username</label>
		          			<Field
						 		name="username" type="text" value="user"
						  		component={Input} validate={[]}
							/>

							<label htmlFor="password">Password</label>
		          			<Field
						 		name="password" type="text" value="user"
						  		component={Input} validate={[]}
							/>

		          			<button 
		          				className="login-submit" type="submit" 
		          				onClick={this.props.handleSubmit(values => this.onSubmit(values))}
								disabled={this.props.pristine || this.props.submitting}>
								Submit
							</button>
		        		</form>

		        		<div className="form-links">
		          			<p>Don't have an account?<Link to="/signup" className="register-link"> Register</Link></p>
		          			<p>OR</p>
		          			<p><span className="demo-login" onClick={() => this.goToDemoAccount()}>Login with demo account</span></p>
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