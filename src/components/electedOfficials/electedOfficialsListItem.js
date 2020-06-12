import React from "react";
import history from "../../history";

export default function ElectedOfficialsListItem(props) {
	console.log("LOOK HERE!",props);

	const handleOfficeClick = () => {
		localStorage.setItem('officialIndices', props.element.officialIndices);
		history.push('/office');
	}

	return (
		<div>
			<div onClick={handleOfficeClick}>{props.element.name}</div>
		</div>
	)
};
