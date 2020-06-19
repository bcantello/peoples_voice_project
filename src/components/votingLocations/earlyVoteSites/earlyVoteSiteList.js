import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import EarlyVoteSitesListItem from "./earlyVoteSiteListItem";

export default function EarlyVoteSitesList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.pollingLocations.data;

	const pollingLocationsArr = data.earlyVoteSites.map((e, index) => {
		return (
			<EarlyVoteSitesListItem element={e} key={index}/>
		);
	});

	return (
		<div>{pollingLocationsArr}</div>
	);
};
