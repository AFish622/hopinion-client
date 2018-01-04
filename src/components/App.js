import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/authActions';

import SignUpWrapper from './SignUpWrapper';
import LoginWrapper from './LoginWrapper'
import Landing from './Landing';
import Dashboard from './Dashboard';
import myHopinion from './myHopinion';


export class App extends React.Component {
	componentDidMount() {
		if (this.props.hasAuthToken) {
			this.props.dispatch(refreshAuthToken());
		}
	}

	componentWillReceiveProps(nextprops) {
		if (nextprops.loggedIn && !this.props.loggedIn) { 
			this.startPeriodicRefresh();
		}

		else if (!nextprops.loggedIn && this.props.loggedIn) { 
			this.stopPeriodicRefresh()
		}
	}

 	startPeriodicRefresh() {
		this.refreshInterval = setInterval( 
			() => this.props.dispatch(refreshAuthToken()),
			60 * 60 * 1000
		);
	}

	stopPeriodicRefresh() {
		if (!this.refreshInterval) {
			return;
		}

		clearInterval(this.refreshInterval);
	}

	render() {

		return (
				<Router>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/signup" component={SignUpWrapper} />
						<Route exact path="/login" component={LoginWrapper} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/myhopinion" component={myHopinion} />
					</div>
				</Router>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(App);