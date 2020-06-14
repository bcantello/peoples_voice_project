import React from "react";
import history from "../../history";

export default function ElectedOfficialsListItem(props) {

	const handleOfficeClick = () => {
		if (props.element.officialIndices.length === 1) {
			localStorage.setItem('officialIndex', props.element.officialIndices);
			history.push('/official');
		} else {
			localStorage.setItem('officialIndices', props.element.officialIndices);
			history.push('/office');
		}
	}

	return (
		<div>
			<div onClick={handleOfficeClick}>{props.element.name}</div>
		</div>
	);
};
