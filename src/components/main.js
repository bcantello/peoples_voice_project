import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "./home/home";
import Office from "./electedOfficials/office/office";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/office" component={Office}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
