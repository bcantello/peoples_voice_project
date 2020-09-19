import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import DropOffLocationsListItem from "./dropOffLocationsListItem";

export default function DropOffLocationsList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.pollingLocations.data;
	let dropOffLocationsArr = this;

	if (data.dropOffLocations) {
		dropOffLocationsArr = data.dropOffLocations.map((e, index) => {
			return (
				<DropOffLocationsListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div className={'early-vote-locations-wrapper'}>{dropOffLocationsArr}</div>
	);
}
