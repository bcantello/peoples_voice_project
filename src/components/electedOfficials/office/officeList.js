import React from "react";
import OfficeListItem from "./officeListItem";
import '../electedOfficials.css';

export default function OfficeList() {
	const officialsIndices = sessionStorage.getItem('officialIndices');
	const indiceArr = officialsIndices.split(',');

	const electedOfficialArray = indiceArr.map((e, index) => {
		return (
			<OfficeListItem element={e} key={index}/>
		);
	});

	return (
		<div className={'office-search-results-wrapper'}>
			<div id={'office-name'}>{sessionStorage.getItem('office')}s</div>
			<div className={'elected-officials-wrapper'}>{electedOfficialArray}</div>
		</div>
	);
};
