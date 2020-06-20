import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import PollingLocationsList from "./pollingLocations/pollingLocationsList";
import EarlyVoteSitesList from "./earlyVoteSites/earlyVoteSiteList";
import './votingLocations.css'

export default function VotingLocationDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;

	return (
		<div id={'election-container'}>
			<div id={'election-user-address'}>Upcoming elections for for {address.line1}, {address.city}, {address.zip}</div>
			<div id={'election-name'}>{universalContext.pollingLocations.data.election.name}</div>
			<div id={'election-day'}>Election day: {universalContext.pollingLocations.data.election.electionDay}</div>
			<div id={'polling-locations-title'}>Polling Locations:</div>
			<PollingLocationsList/>
			<div id={'early-voting-sites-title'}>Early Voting Sites</div>
			<EarlyVoteSitesList/>
		</div>
	);
};
