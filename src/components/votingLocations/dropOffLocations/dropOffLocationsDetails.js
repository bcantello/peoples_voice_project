import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import history from "../../../history";
import '../votingLocations.css'
import DropOffLocationsList from "./dropOffLocationsList";

export default function DropOffLocationsDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;
	const earlyVoteArr = [];
	const pollingLocationsArr = [];

	if (universalContext.pollingLocations.data.earlyVoteSites !== undefined) {
		earlyVoteArr.push(
			<div>
				<div id={'early-voting-sites-link'} onClick={() => history.push('/earlyVoteSites')}>View Early Voting Sites</div>
			</div>
		);
	}

	if (universalContext.pollingLocations.data.pollingLocations !== undefined) {
		pollingLocationsArr.push(
			<div>
				<div id={'early-voting-sites-link'} onClick={() => history.push('/pollingLocations')}>View Polling Locations</div>
			</div>
		);
	}

	return (
		<div id={'election-container'}>
			<div id={'election-user-address'}>Upcoming elections for
				for {address.line1}, {address.city}, {address.zip}</div>
			<div id={'election-name'}>{universalContext.pollingLocations.data.election.name}</div>
			<div id={'election-day'}>Election day: {universalContext.pollingLocations.data.election.electionDay}</div>
			{earlyVoteArr}
			{pollingLocationsArr}
			<div id={'polling-locations-title'}>Drop Off Locations:</div>
			<DropOffLocationsList/>
		</div>
	);
};
