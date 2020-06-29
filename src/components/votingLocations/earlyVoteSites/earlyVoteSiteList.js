import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import EarlyVoteSitesListItem from "./earlyVoteSiteListItem";

export default function EarlyVoteSitesList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.pollingLocations.data;
	let pollingLocationsArr = this;

	if (data.earlyVoteSites !== undefined) {
		pollingLocationsArr = data.earlyVoteSites.map((e, index) => {
			return (
				<EarlyVoteSitesListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div className={'early-vote-locations-wrapper'}>{pollingLocationsArr}</div>
	);
};
