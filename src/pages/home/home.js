import React, {useContext} from "react";
import RepSearchForm from "../../components/searchForm/repSearchForm";
import {UniversalContext} from "../../App";
import './home.css';
import headerImage from '../../assets/draft-opaque.svg';

export default function Home() {
	const universalContext = useContext(UniversalContext);
	const electionsList = universalContext.electionInfo;
	const userIp = universalContext.userIpInfo;
	let upcomingElection = '';
	let electionDisplay = '';

	if (electionsList.elections !== undefined) {
		for (let i = 1; i < electionsList.elections.length; i++) {
			let splitArr = electionsList.elections[i].ocdDivisionId.split(':')
			if (userIp.region_code === splitArr[2].toUpperCase()) {
				upcomingElection = electionsList.elections[i].name;
			}
		}
		upcomingElection !== '' ? electionDisplay = upcomingElection : electionDisplay =
			`There are no upcoming elections for ${userIp.region}`;
	}

	return (
		<>
			<h1 className={'home-h1'}>The People's Voice Project</h1>
			<div className={'content-block-1'}>
				<img id={'header-image'} src={headerImage} alt={'peace sign hands'}/>
			</div>
			<div className={'intro-block'}>
				<p className={'home-intro'}>Welcome to The People's Voice Project. A central location where users can search government representatives,
					discover upcoming local elections, and find polling locations - enjoy!</p>
			</div>
			<div className={'content-block-2'}>
				<h1 className={'block2-h1'}>Representative Search</h1>
				<div className={'upcoming'}>
				<p className={'rep-intro'}><span style={{fontWeight:'bold'}}>Here's How:</span> Enter your address to find the contact information for the government
					representatives who have been elected to serve you.</p>
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
