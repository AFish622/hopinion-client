import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './Nav-bar';
import SideBar from './Side-bar';
import Jumbotron from './Jumbotron';
import SignUp from './Sign-up';
import Login from './Login';
import Landing from './Landing'


export default class App extends React.Component {
	render() {


	//function to sidebar for onClick
		return (
				<Router>
					<div>
						<NavBar />
						<SideBar setJumbotron={this.setJumbotron} />
						<Jumbotron />
					</div>
				</Router>
		);
	}
}