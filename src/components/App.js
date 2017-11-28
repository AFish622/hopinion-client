import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './Nav-bar';
import SideBar from './Side-bar';
import Jumbotron from './Jumbotron';

export default function App() {
	return (
			<Router>
				<div>
					<NavBar />
					// <SideBar />
					<Jumbotron />
				</div>
			</Router>
		);
}