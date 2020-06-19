import React from "react";

export default function EarlyVoteSitesListItem(props) {
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
		<div className={'early-vote-location-details'}>
			<div className={'early-vote-location-dates'}>From {props.element.startDate} to {props.element.endDate}</div>
			<div className={'early-vote-location-address'}>
				<div>{address.locationName}</div>
				<div>{address.line1}</div>
				<div>{address.city}, {address.state} {address.zip}</div>
			</div>
			<div className={'early-vote-location-hours'}>{hours}</div>
			<div className={'early-vote-location-notes'}>{notes}</div>
		</div>
	);
};