import React, {useContext} from "react";
import history from "../../history";
import {UniversalContext} from "../../App";

export default function OfficeListItem(props) {
	const universalContext = useContext(UniversalContext);
	console.log(props);

	return (
		<div>
			<div>Polling List goes here </div>
		</div>
	);
};