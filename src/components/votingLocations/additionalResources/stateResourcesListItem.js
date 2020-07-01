import React from "react";
import Email from '../../../assets/icons/email.svg';
import Phone from '../../../assets/icons/phone.svg'
import '../votingLocations.css';

export default function StateResourcesListItem(props) {
	const stateResources = props.element.electionAdministrationBody;
	const localResources = props.element.local_jurisdiction.electionAdministrationBody;
	const additionalResourceArr = [];
	const localResourceArr = [];
	const localOfficialsArr = [];

	if (localResources.electionInfoUrl !== undefined) {
		localResourceArr.push(
			<div>
				Election Information: <a href={localResources.electionInfoUrl}
				                         target={'_blank'}
				                         rel={'nofollow noopener noreferrer'}
				                         className={'resources-link'}>{localResources.electionInfoUrl}</a>
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
				href={`mailto:${localResources.electionOfficials[0].emailAddress}`}
				className={'resources-link'}>{localResources.electionOfficials[0].emailAddress}</a>
			</div>
		);
	}

	if (localResources.electionOfficials[0].officePhoneNumber !== undefined) {
		localOfficialsArr.push(
			<div><img src={Phone}
			          alt={'phone'}
			          id={'officials-icon'}/> {localResources.electionOfficials[0].officePhoneNumber}</div>
		);
	}

	if (localResources.electionOfficials[0] !== undefined) {
		localResourceArr.push(
			<div>
				<div className={'resources-subtitle'}>Election Officials:</div>
				<div>{localOfficialsArr}</div>
			</div>
		);
	}

	if (stateResources.absenteeVotingInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Absentee Voting Information: <a href={stateResources.absenteeVotingInfoUrl}
			                                     target={'_blank'}
			                                     rel={'nofollow noopener noreferrer'}
			                                     className={'resources-link'}>{stateResources.absenteeVotingInfoUrl}</a>
			</div>
		);
	}

	if (stateResources.ballotInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Ballot Information: <a href={stateResources.ballotInfoUrl}
			                            target={'_blank'}
			                            rel={'nofollow noopener noreferrer'}
			                            className={'resources-link'}>{stateResources.ballotInfoUrl}</a></div>
		);
	}

	if (stateResources.electionInfoUrl !== undefined) {
		additionalResourceArr.push(
			<div>Election Information: <a href={stateResources.electionInfoUrl}
			                              target={'_blank'}
			                              rel={'nofollow noopener noreferrer'}
			                              className={'resources-link'}>{stateResources.electionInfoUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRegistrationConfirmationUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voter Registration Confirmation: <a href={stateResources.electionRegistrationConfirmationUrl}
			                                         target={'_blank'}
			                                         rel={'nofollow noopener noreferrer'}
			                                         className={'resources-link'}>{stateResources.electionRegistrationConfirmationUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRegistrationUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voter Registration Information: <a href={stateResources.electionRegistrationUrl}
			                                        target={'_blank'}
			                                        rel={'nofollow noopener noreferrer'}
			                                        className={'resources-link'}>{stateResources.electionRegistrationUrl}</a>
			</div>
		);
	}

	if (stateResources.electionRulesUrl !== undefined) {
		additionalResourceArr.push(
			<div>Election Rules: <a href={stateResources.electionRulesUrl}
			                        target={'_blank'}
			                        rel={'nofollow noopener noreferrer'}
			                        className={'resources-link'}>{stateResources.electionRulesUrl}</a>
			</div>
		);
	}

	if (stateResources.votingLocationFinderUrl !== undefined) {
		additionalResourceArr.push(
			<div>Voting Location Finder: <a href={stateResources.votingLocationFinderUrl}
			                                target={'_blank'}
			                                rel={'nofollow noopener noreferrer'}
			                                className={'resources-link'}>{stateResources.votingLocationFinderUrl}</a>
			</div>
		);
	}

	return (
		<div className={'resources-wrapper'}>
			<div className={'local-resources-title'}>Local Resources</div>
			{localResourceArr}
			<div className={'additional-resources-title'}>Additional Resources</div>
			{additionalResourceArr}
		</div>
	);
}
