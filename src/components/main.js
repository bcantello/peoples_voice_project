import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "./home/home";
import OfficeList from "./electedOfficials/office/officeList";
import ElectedOfficialDetails from "./electedOfficials/official/electedOfficialDetails";
import RepSearchResults from "./electedOfficials/repSearchForm/repSearchResults";
import About from "./about/about";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/electedOffices" component={RepSearchResults}/>
			<Route exact path="/office" component={OfficeList}/>
			<Route exact path="/official" component={ElectedOfficialDetails}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
