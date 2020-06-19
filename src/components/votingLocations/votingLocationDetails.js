import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import PollingLocationsList from "./pollingLocations/pollingLocationsList";
import EarlyVoteSitesList from "./earlyVoteSites/earlyVoteSiteList";

export default function VotingLocationDetails() {
	const universalContext = useContext(UniversalContext);
	const address = universalContext.pollingLocations.data.normalizedInput;

	return (
		<div>
			<div>Polling Locations for {address.line1}, {address.city}, {address.zip}</div>
			<PollingLocationsList/>
			<div>Early Voting Sites</div>
			<EarlyVoteSitesList/>
		</div>
	);
};
