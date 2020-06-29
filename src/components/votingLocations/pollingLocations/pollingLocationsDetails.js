import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import history from "../../../history";
import '../votingLocations.css'
import PollingLocationsList from "./pollingLocationsList";

export default function PollingLocationsDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;
	const earlyVoteArr = [];
	const DropOffArr = [];

	if (universalContext.pollingLocations.data.earlyVoteSites !== undefined) {
		earlyVoteArr.push(
			<div>
				<span className={'voting-sites-link'} onClick={() => history.push('/earlyVoteSites')}>View Early Voting Sites</span>
			</div>
		);
	}

	if (universalContext.pollingLocations.data.dropOffLocations !== undefined) {
		DropOffArr.push(
			<div>
				<span className={'voting-sites-link'} onClick={() => history.push('/dropOffSites')}>View Drop Off Sites</span>
			</div>
		);
	}

	return (
		<div className={'election-container'}>
			<div className={'election-user-address'}>Upcoming elections for
				for {address.line1}, {address.city}, {address.zip}</div>
			<div className={'election-name'}>{universalContext.pollingLocations.data.election.name}</div>
			<div className={'election-day'}>Election day: {universalContext.pollingLocations.data.election.electionDay}</div>
			<div className={'location-links-container'}>
				{earlyVoteArr}
				{DropOffArr}
			</div>
			<div className={'polling-locations-title'}>Polling Locations:</div>
			<PollingLocationsList/>
		</div>
	);
};
