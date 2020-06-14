import React, {useContext} from "react";
import ElectedOfficialsListItem from "./electedOfficialsListItem";
import {UniversalContext} from "../../App";

export default function ElectedOfficialsList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.officials.data;
	let electedOffices = this;
	let city = this;
	let state = this;
	let zip = this;

	if (universalContext.officials.data !== undefined) {
		city = data.normalizedInput.city;
		state = data.normalizedInput.state;
		zip = data.normalizedInput.zip;
		electedOffices = data.offices.map((e, index) => {
			return (
				<ElectedOfficialsListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div>
			<div>Elected Officials For:</div>
			<div>{city} {state}, {zip}</div>
			<div>{electedOffices}</div>
		</div>
	)
}
