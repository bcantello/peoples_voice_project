import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import UpcomingElectionsListItem from "./upcomingElectionsListItem";

export default function UpcomingElectionsList() {
	const universalContext = useContext(UniversalContext);
	const electionsList = universalContext.electionInfo.elections;

	if (sessionStorage.getItem('electionsList') === null) {
		electionsList.shift();
		sessionStorage.setItem('electionsList', JSON.stringify(electionsList));
	}
	console.log(JSON.parse(sessionStorage.getItem('electionsList')));

	const electionsArr = JSON.parse(sessionStorage.getItem('electionsList')).map((e, index) => {
		return (
			<UpcomingElectionsListItem element={e} key={index}/>
		);
	});

	return (
		<div>{electionsArr}</div>
	);
};
