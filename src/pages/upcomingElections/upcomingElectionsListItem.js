import React from "react";

export default function UpcomingElectionsListItem(props) {
	return (
		<div className={'upcoming-election-container'}>
			<div className={'upcoming-election-name'}> {props.element.name} </div>
			<div className={'upcoming-election-day'}> {props.element.electionDay} </div>
		</div>
	);
};
