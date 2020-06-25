import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import Home from "../pages/home/home";
import OfficeList from "./electedOfficials/office/officeList";
import ElectedOfficialDetails from "./electedOfficials/official/electedOfficialDetails";
import RepSearchResults from "./electedOfficials/searchForm/repSearchResults";
import About from "../pages/about/about";
import VotingLocationDetails from "./votingLocations/votingLocationDetails";
import UpcomingElections from "../pages/upcomingElections/upcompingElections";

export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/upcomingElections" component={UpcomingElections}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/electedOffices" component={RepSearchResults}/>
			<Route exact path="/office" component={OfficeList}/>
			<Route exact path="/official" component={ElectedOfficialDetails}/>
			<Route exact path={"/pollingLocationDetails"} component={VotingLocationDetails}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
