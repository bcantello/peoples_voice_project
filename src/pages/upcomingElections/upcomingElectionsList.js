import React, {useContext} from "react";
import {UniversalContext} from "../../App";
import UpcomingElectionsListItem from "./upcomingElectionsListItem";
import './upcomingElections.css';
import Home from "../home/home";

export default function UpcomingElectionsList() {
	const universalContext = useContext(UniversalContext);
	const electionsList = universalContext.electionInfo.elections;

	if (sessionStorage.getItem('electionsList') === null) {
		if (electionsList !== undefined) {
			electionsList.shift();
			sessionStorage.setItem('electionsList', JSON.stringify(electionsList));
		}
		else {
			//redirect page through home to have universal context and session initiated
			const needs_loading = true;
			return (
				<Home needs_loading={needs_loading}/>
			)
		}
	}

	const electionsArr = JSON.parse(sessionStorage.getItem('electionsList')).map((e, index) => {
		return (
			<UpcomingElectionsListItem element={e} key={index}/>
		);
	});

	return (
		<div id={'upcoming-elections-wrapper'}>
			<div id={'upcoming-elections-title'}>All Upcoming Elections</div>
			{electionsArr}
		</div>
	);
};
