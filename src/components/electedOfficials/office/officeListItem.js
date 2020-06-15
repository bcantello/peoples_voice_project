import React, {useContext} from "react";
import history from "../../../history";
import {UniversalContext} from "../../../App";
import '../electedOfficials.css';

export default function OfficeListItem(props) {
	const universalContext = useContext(UniversalContext);
	const official = universalContext.officials.data.officials[props.element].name;
	console.log(universalContext.officials.data)

	const handleOfficialClick = () => {
		localStorage.setItem('officialIndex', props.element);
		history.push('/official');
	}

	return (
		<div>
			<div className={'elected-official'} onClick={handleOfficialClick}>{official}</div>
		</div>
	);
};
