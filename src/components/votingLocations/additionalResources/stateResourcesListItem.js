import React from "react";
import Email from '../../../assets/icons/email.svg';
import '../votingLocations.css';

export default function StateResourcesListItem(props) {
	console.log(props)
	const stateResources = props.element.electionAdministrationBody;
	console.log("STATE LEVEL",stateResources);
	const localResources = props.element.local_jurisdiction.electionAdministrationBody;
	console.log("LOCAL LEVEL",localResources);
	const additionalResourceArr = [];
	const localResourceArr = [];
	const localOfficialsArr = [];

	if (localResources.electionInfoUrl !== undefined) {
		localResourceArr.push(
			<div>
				Election Information: <a href={localResources.electionInfoUrl}
				                         target={'_blank'}
				                         rel={'nofollow noopener noreferrer'}>{localResources.electionInfoUrl}</a>
			</div>
		);
	}

	if (localResources.physicalAddress !== undefined) {
		localOfficialsArr.push(
			<div>
				<div>{localResources.physicalAddress.line1}</div>
				<div>{localResources.physicalAddress.city} {localResources.physicalAddress.state} {localResources.physicalAddress.zip}</div>
			</div>
		);
	}

	if (localResources.electionOfficials[0].emailAddress !== undefined) {
		localOfficialsArr.push(
			<div><img src={Email} alt={'email'} id={'officials-icon'}/> <a
				href={`mailto:${localResources.electionOfficials[0].emailAddress}`}>{localResources.electionOfficials[0].emailAddress}</a>
			</div>
		);
	}

	if (localResources.electionOfficials[0].officePhoneNumber !== undefined) {
		localOfficialsArr.push(
			<div>Phone: {localResources.electionOfficials[0].officePhoneNumber}</div>
		);
	}

	if (localResources.electionOfficials[0] !== undefined) {
		localResourceArr.push(
			<div>
				<div>Election Officials:</div>
				<div>{localOfficialsArr}</div>
			</div>
		);
	}

	if (stateResources.absenteeVotingInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Absentee Voting Information: <a href={stateResources.absenteeVotingInfoUrl}
			                                     target={'_blank'}
			                                     rel={'nofollow noopener noreferrer'}>{stateResources.absenteeVotingInfoUrl}</a>
			</div>
		);
	}

	if (stateResources.ballotInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Ballot Information: <a href={stateResources.ballotInfoUrl}
			                            target={'_blank'}
			                            rel={'nofollow noopener noreferrer'}>{stateResources.ballotInfoUrl}</a></div>
		);
	}

	if (stateResources.electionInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Election Information: <a href={stateResources.electionInfoUrl}
			                              target={'_blank'}
			                              rel={'nofollow noopener noreferrer'}>{stateResources.electionInfoUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRegistrationConfirmationUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voter Registration Confirmation: <a href={stateResources.electionRegistrationConfirmationUrl}
			                            target={'_blank'}
			                            rel={'nofollow noopener noreferrer'}>{stateResources.electionRegistrationConfirmationUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRegistrationUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voter Registration Information: <a href={stateResources.electionRegistrationUrl}
			                              target={'_blank'}
			                              rel={'nofollow noopener noreferrer'}>{stateResources.electionRegistrationUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRulesUrl !== undefined) {
		additionalResourceArr.push(
			<div>Election Rules: <a href={stateResources.electionRulesUrl}
			                              target={'_blank'}
			                              rel={'nofollow noopener noreferrer'}>{stateResources.electionRulesUrl}</a>
			</div>
		);
	}

	if (stateResources.votingLocationFinderUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voting Location Finder: <a href={stateResources.votingLocationFinderUrl}
			                              target={'_blank'}
			                              rel={'nofollow noopener noreferrer'}>{stateResources.votingLocationFinderUrl}</a>
			</div>
		);
	}

	return (
		<div>
			<div>Local Resources</div>
			{localResourceArr}
			<div>Additional Resources</div>
			{additionalResourceArr}
		</div>
	);
}
