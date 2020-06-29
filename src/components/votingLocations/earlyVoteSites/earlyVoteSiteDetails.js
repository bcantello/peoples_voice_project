import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import history from "../../../history";
import '../votingLocations.css'
import EarlyVoteSitesList from "./earlyVoteSiteList";

export default function EarlyVoteSiteDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;
	const dropOffArr = [];
	const pollingLocationsArr = [];

	if (universalContext.pollingLocations.data.dropOffLocations !== undefined) {
		dropOffArr.push(
			<div>
				<span className={'voting-sites-link'} onClick={() => history.push('/dropOffSites')}>View Drop Off Sites</span>
			</div>
		);
	}

	if (universalContext.pollingLocations.data.pollingLocations !== undefined) {
		pollingLocationsArr.push(
			<div>
				<span className={'voting-sites-link'} onClick={() => history.push('/pollingLocations')}>View Polling Locations</span>
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
				{dropOffArr}
				{pollingLocationsArr}
			</div>
			<div className={'polling-locations-title'}>Early Vote Sites:</div>
			<EarlyVoteSitesList/>
		</div>
	);
};
