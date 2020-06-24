import React, {useContext} from "react";
import RepSearchForm from "../../components/electedOfficials/repSearchForm/repSearchForm";
import {UniversalContext} from "../../App";
import './home.css';

export default function Home() {
	const universalContext = useContext(UniversalContext);
	const electionsList = universalContext.electionInfo;
	const userIp = universalContext.userIpInfo;
	let upcomingElection = '';
	let electionDisplay = '';

	if (electionsList.elections !== undefined) {
		for (let i = 1; i < electionsList.elections.length; i++) {
			let splitArr = electionsList.elections[i].ocdDivisionId.split(':')
			if (userIp.region.toLowerCase() === splitArr[2]) {
				upcomingElection = electionsList.elections[i].name;
			}
		}
		upcomingElection !== '' ? electionDisplay = upcomingElection : electionDisplay =
			`There are no upcoming elections for ${userIp.region}`
	}

	return (
		<>
			<div className={'content-block-1'}>
				<h1 className={'home-h1'}>The People's Voice Project</h1>
				<p className={'home-intro'}>Welcome to The People's Voice Project. A central location where users can search government representatives,
				discover upcoming local elections, and find polling locations - enjoy!</p>
			</div>
			<div className={'content-block-2'}>
				<p className={'rep-intro'}>Enter your address to find the contact information for the government
					representatives who have been elected to serve you.</p>
				<p>Upcoming elections for {userIp.region}:</p>
				<p>{electionDisplay}</p>
			<RepSearchForm/>
			</div>
		</>
	);
};
