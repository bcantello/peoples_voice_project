import React from "react";
import history from "../../../history";
import '../electedOfficials.css';

export default function ElectedOfficialsListItem(props) {

	const handleOfficeClick = () => {
		if (props.element.officialIndices.length === 1) {
			localStorage.setItem('officialIndex', props.element.officialIndices);
			localStorage.setItem('office', props.element.name)
			history.push('/official');
		} else {
			localStorage.setItem('officialIndices', props.element.officialIndices);
			localStorage.setItem('office', props.element.name)
			history.push('/office');
		}
	}

	return (
		<div className={'elected-office-container'}>
			<span className={'elected-office'} onClick={handleOfficeClick}>{props.element.name}</span>
		</div>
	);
};
