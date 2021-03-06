import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import PollingLocationsListItem from "./pollingLocationsListItem";

export default function PollingLocationsList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.pollingLocations.data;
	let pollingLocationsArr = this;

	if (data.pollingLocations) {
		pollingLocationsArr = data.pollingLocations.map((e, index) => {
			return (
				<PollingLocationsListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div>{pollingLocationsArr}</div>
	);
};
