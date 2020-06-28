import React, {useContext} from "react";
import history from "../../../history";
import {UniversalContext} from "../../../App";
import '../electedOfficials.css';

export default function OfficeListItem(props) {
	const universalContext = useContext(UniversalContext);
	const official = universalContext.officials.data.officials[props.element].name;

	const handleOfficialClick = () => {
		sessionStorage.setItem('officialIndex', props.element);
		history.push('/official');
	}

	return (
		<div className={'elected-official-container'}>
			<span className={'elected-official'} onClick={handleOfficialClick}>{official}</span>
		</div>
	);
};
