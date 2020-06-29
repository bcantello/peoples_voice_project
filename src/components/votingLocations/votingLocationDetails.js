import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import PollingLocationsList from "./pollingLocations/pollingLocationsList";
import './votingLocations.css'
import history from "../../history";

export default function VotingLocationDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;
	const earlyVoteArr = [];
	const dropOffArr = [];
	const pollingLocationsArr = [];

	if (universalContext.pollingLocations.data.earlyVoteSites !== undefined) {
		earlyVoteArr.push(
			<div>
				<span id={'early-voting-sites-link'} onClick={() => history.push('/earlyVoteSites')}>View Early Voting Sites</span>
			</div>
		);
	}

	if (universalContext.pollingLocations.data.dropOffLocations !== undefined) {
		dropOffArr.push(
			<div>
				<span id={'early-voting-sites-link'} onClick={() => history.push('/dropOffSites')}>View Drop Off Locations</span>
			</div>
		);
	}

	if ((universalContext.pollingLocations.data.earlyVoteSites !== undefined) && (universalContext.pollingLocations.data.dropOffLocations !== undefined)) {
		pollingLocationsArr.push(
			<div>
				<span id={'early-voting-sites-link'} onClick={() => history.push('/pollingLocations')}>View Polling Locations</span>
			</div>
		);
	} else {
		pollingLocationsArr.push(
			<div>
				<div id={'polling-locations-title'}>Polling Locations:</div>
				<PollingLocationsList/>
			</div>
		);
	}

	return (
		<div id={'election-container'}>
			<div id={'election-user-address'}>Upcoming elections for
				for {address.line1}, {address.city}, {address.zip}</div>
			<div id={'election-name'}>{universalContext.pollingLocations.data.election.name}</div>
			<div id={'election-day'}>Election day: {universalContext.pollingLocations.data.election.electionDay}</div>
			{dropOffArr}
			{earlyVoteArr}
			{pollingLocationsArr}
		</div>
	);
};
