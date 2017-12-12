import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import Landing from './Landing';
import Dashboard from './Dashboard';

const Routes = props => {
	<Router>
		<div>
			<Route exact path="/" component={Landing} />
			<Route exact path="/signup" component={SignUp} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
		</div>
	</Router>
}

export default Routes;