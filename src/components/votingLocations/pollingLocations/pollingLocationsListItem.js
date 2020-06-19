import React from "react";

export default function PollingLocationsListItem(props) {
	console.log("Polling Props", props);
	const address = props.element.address;
	const hours = [];
	const notes = [];

	if (props.element.pollingHours !== undefined) {
		const pollingHoursArr = props.element.pollingHours.split(';');
		for (let i = 0; i < pollingHoursArr.length; i++) {
			hours.push(
				<div>{pollingHoursArr[i]}</div>
			);
		}
	}

	if (props.element.notes !== undefined) {
		notes.push(address.notes);
	}

	return (
		<div className={'polling-location-details'}>
			<div className={'polling-location-address'}>
				<div>{address.locationName}</div>
				<div>{address.line1}</div>
				<div>{address.city}, {address.state} {address.zip}</div>
			</div>
			<div className={'polling-location-hours'}>{hours}</div>
			<div className={'polling-location-notes'}>{notes}</div>
		</div>
	);
};
