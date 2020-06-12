import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "./home/home";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
