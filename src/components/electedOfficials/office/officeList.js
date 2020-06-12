import React from "react";
import OfficeListItem from "./officeListItem";

export default function OfficeList() {
	const officialsIndices = localStorage.getItem('officialIndices');
	const indiceArr = officialsIndices.split(',');

	const electedOfficialArray = indiceArr.map((e, index) => {
		return (
			<OfficeListItem element={e} key={index}/>
		);
	});

	return (
		<div>{electedOfficialArray}</div>
	);
};
