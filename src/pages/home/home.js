import React, {useContext} from "react";
import RepSearchForm from "../../components/searchForm/repSearchForm";
import {UniversalContext} from "../../App";
import './home.css';
import headerImage from '../../assets/draft-opaque.svg';

export default function Home() {
	const universalContext = useContext(UniversalContext);
	const electionsList = universalContext.electionInfo;
	const userIp = universalContext.userIpInfo;
	let upcomingElection = [];
	let electionDisplay = [];

	if (electionsList.elections) {
		for (let i = 1; i < electionsList.elections.length; i++) {
			let divisionArr = electionsList.elections[i].ocdDivisionId.split(':');
			// Check for election in users state
			if (divisionArr[2]) {
				if (userIp.region_code === divisionArr[2].toUpperCase()) {
					upcomingElection.push(
						<div>{electionsList.elections[i].name} : {electionsList.elections[i].electionDay}</div>
					);
				}
			// Check for national election
			} else if (divisionArr[1] === 'us' && divisionArr[2] === undefined) {
				upcomingElection.push(
					<div>{electionsList.elections[i].name} : {electionsList.elections[i].electionDay}</div>
				);
			}
		}
		upcomingElection.length !== 0 ? electionDisplay = upcomingElection : electionDisplay =
			`There are no upcoming elections for ${userIp.region}`;
	}

	return (
		<>
			<h1 className={'home-h1'}>The People's Voice Project</h1>
			<div className={'content-block-1'}>
				<img id={'header-image'} src={headerImage} alt={'peace sign hands'}/>
			</div>
			<div className={'intro-block'}>
				<p className={'home-intro'}>Welcome to The People's Voice Project. A central location where you can
					search government representatives,
					discover upcoming local elections, and find polling locations. Enjoy!</p>
			</div>
			<div className={'content-block-2'}>
				<h1 className={'block2-h1'}>Representative Search</h1>
				<div className={'upcoming'}>
					<p className={'rep-intro'}><span style={{fontWeight: 'bold'}}>Here's How:</span> Enter your address
						to find the contact information for the government representatives who have been elected to
						serve you. If there is an upcoming election in your area, click <span
							style={{fontWeight: 'bold'}}>See Elections</span> to view your voting locations and hours of
						operation.</p>
					<div id={'upcoming-details'}>
						<p>Upcoming elections for {userIp.region}:</p>
						<p>{electionDisplay}</p>
					</div>
				</div>
				<RepSearchForm/>
			</div>
		</>
	);
};
