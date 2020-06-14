import React, {useContext} from "react";
import history from "../../../history";
import {UniversalContext} from "../../../App";

export default function OfficeListItem(props) {
	const universalContext = useContext(UniversalContext);
	const official = universalContext.officials.data.officials[props.element].name;

	const handleOfficialClick = () => {
		localStorage.setItem('officialIndex', props.element);
		history.push('/official');
	}

	return (

		<div onClick={handleOfficialClick}>{official}</div>
	);
};
