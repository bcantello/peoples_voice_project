import React from "react";
import PollingLocationsListItem from "./pollingLocationsListItem";

export default function PollingLocationsList() {
	const pollingLocations = sessionStorage.getItem('pollingLocations');
	const locationsArr = pollingLocations.split(',');

	const pollingLocationsArr = locationsArr.map((e, index) => {
		return (
			<PollingLocationsListItem element={e} key={index}/>
		);
	});

	return (
		<div>{pollingLocationsArr}</div>
	);
};
