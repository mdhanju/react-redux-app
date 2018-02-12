import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './main.css'

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/signin" name="SignIn" component={SignIn} />
				<Route exact path="/signup" name="SignUp" component={SignUp} />
				<Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
				<Redirect from="/" to="/signIn" />
			</Switch>
		);
	}
}

export default App;
