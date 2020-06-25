import React from "react";
import './upcomingElections.css';

export default function UpcomingElectionsListItem(props) {
	return (
		<div className={'upcoming-election-container'}>
			<div className={'upcoming-election-name'}> {props.element.name} </div>
			<div className={'upcoming-election-day'}>Election Day: {props.element.electionDay} </div>
		</div>
	);
};
