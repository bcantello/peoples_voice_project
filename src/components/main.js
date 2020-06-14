import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "./home/home";
import OfficeList from "./electedOfficials/office/officeList";
import ElectedOfficialDetails from "./electedOfficials/official/electedOfficialDetails";
import SearchResults from "./electedOfficials/searchResults";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/electedOffices" component={SearchResults}/>
			<Route exact path="/office" component={OfficeList}/>
			<Route exact path="/official" component={ElectedOfficialDetails}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
