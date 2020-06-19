import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import PollingLocationsList from "./pollingLocations/pollingLocationsList";
import EarlyVoteSitesList from "./earlyVoteSites/earlyVoteSiteList";

export default function VotingLocationDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;

	return (
		<div>
			<div>Upcoming elections for for {address.line1}, {address.city}, {address.zip}</div>
			<div>{universalContext.pollingLocations.data.election.name}</div>
			<div>Election day: {universalContext.pollingLocations.data.election.electionDay}</div>
			<div>Polling Locations:</div>
			<PollingLocationsList/>
			<div>Early Voting Sites</div>
			<EarlyVoteSitesList/>
		</div>
	);
};
