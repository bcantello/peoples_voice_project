import React from "react";
import OfficeListItem from "./officeListItem";
import '../electedOfficials.css';

export default function OfficeList() {
	const officialsIndices = localStorage.getItem('officialIndices');
	const indiceArr = officialsIndices.split(',');

	const electedOfficialArray = indiceArr.map((e, index) => {
		return (
			<OfficeListItem element={e} key={index}/>
		);
	});

	return (
		<div>
			<div id={'office-name'}>{localStorage.getItem('office')}s Representing {localStorage.getItem('state')}</div>
			<div>{electedOfficialArray}</div>
		</div>
	);
};
