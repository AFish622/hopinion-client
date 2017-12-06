import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import Input from './Input'
import './SignUp.css';


export class SignUp extends React.Component {
	onSubmit(values) {
		return fetch('', {
			method: 'POST',
			body: JSON.stringify(values),
			headers: { 'Content-Type': 'application.json' }
		})
	}

	// onSubmit(values) {
 //        const {username, password, firstName, lastName} = values;
 //        const user = {username, password, firstName, lastName};
 //        return this.props
 //            .dispatch(registerUser(user))
 //            .then(() => this.props.dispatch(login(username, password)));
 //    }


	render() {
		return (
			<div>
				<div className="signup-container">
					<div className="head">
						<p>Sign Up</p>
					</div>

					<form className="signup-form" onClick={this.props.handleSubmit(values => this.onSubmit(values))} >
						<Field
						 name="first-name" type="text" placeholder="first name" 
						  component={Input} validate={[required, nonEmpty]}
						/>

						<Field
						 name="last-name" type="text" placeholder="last name"
						   component={Input} validate={[required, nonEmpty]}
						/>

						<Field
						 name="username" type="text" placeholder="username"
						  component={Input} validate={[required, nonEmpty, isTrimmed]}
						/>

						<Field
						 name="password" type="text" placeholder="password"
						  component={Input} validate={[required, length({min: 3, max: 20}), isTrimmed]}
						/>

						<Field
						 name="confirm-password" type="text" placeholder="confirm password"
						  component={Input} validate={[required, nonEmpty, matches('password')]}
						/>

						<button className="signup-submit" type="submit" 
						disabled={this.props.pristine || this.props.submitting}>
						Submit
						</button>
          				
        			</form>

        			<div className="form-links">
          				<p>Alreadt have an account?<Link to="/login"> Login</Link></p>
        			</div>
				</div>
			</div>
		)
	}
}

export default reduxForm({
    form: 'signUp',
    // onSubmitFail: (errors, dispatch) =>
    // 	dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUp);