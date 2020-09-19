import React from "react";
import Email from '../../../assets/icons/email.svg';
import Phone from '../../../assets/icons/phone.svg'
import '../votingLocations.css';

export default function StateResourcesListItem(props) {
	let stateResources = this;
	let localResources = this;
	const additionalResourceArr = [];
	const localResourceArr = [];
	const localOfficialsArr = [];

	if (props.element.local_jurisdiction) {
		localResources = props.element.local_jurisdiction.electionAdministrationBody;
		if (localResources.electionInfoUrl) {
			localResourceArr.push(
				<div>
					Election Information: <a href={localResources.electionInfoUrl}
					                         target={'_blank'}
					                         rel={'nofollow noopener noreferrer'}
					                         className={'resources-link'}>{localResources.electionInfoUrl}</a>
				</div>
			);
		}
		if (localResources.physicalAddress) {
			localOfficialsArr.push(
				<div>
					<div>{localResources.physicalAddress.line1}</div>
					<div>{localResources.physicalAddress.city} {localResources.physicalAddress.state} {localResources.physicalAddress.zip}</div>
				</div>
			);
		}
		if (localResources.electionOfficials[0].emailAddress) {
			localOfficialsArr.push(
				<div><img src={Email} alt={'email'} id={'officials-icon'}/> <a
					href={`mailto:${localResources.electionOfficials[0].emailAddress}`}
					className={'resources-link'}>{localResources.electionOfficials[0].emailAddress}</a>
				</div>
			);
		}
		if (localResources.electionOfficials[0].officePhoneNumber) {
			localOfficialsArr.push(
				<div><img src={Phone}
				          alt={'phone'}
				          id={'officials-icon'}/> {localResources.electionOfficials[0].officePhoneNumber}</div>
			);
		}
		if (localResources.electionOfficials[0]) {
			localResourceArr.push(
				<div>
					<div className={'resources-subtitle'}>Election Officials:</div>
					<div>{localOfficialsArr}</div>
				</div>
			);
		}
	}

	if (props.element.electionAdministrationBody) {
		stateResources = props.element.electionAdministrationBody;
		if (stateResources.absenteeVotingInfoUrl) {
			additionalResourceArr.push(
				<div>Absentee Voting Information: <a href={stateResources.absenteeVotingInfoUrl}
				                                     target={'_blank'}
				                                     rel={'nofollow noopener noreferrer'}
				                                     className={'resources-link'}>{stateResources.absenteeVotingInfoUrl}</a>
				</div>
			);
		}
		if (stateResources.ballotInfoUrl) {
			additionalResourceArr.push(
				<div>Ballot Information: <a href={stateResources.ballotInfoUrl}
				                            target={'_blank'}
				                            rel={'nofollow noopener noreferrer'}
				                            className={'resources-link'}>{stateResources.ballotInfoUrl}</a></div>
			);
		}
		if (stateResources.electionInfoUrl) {
			additionalResourceArr.push(
				<div>Election Information: <a href={stateResources.electionInfoUrl}
				                              target={'_blank'}
				                              rel={'nofollow noopener noreferrer'}
				                              className={'resources-link'}>{stateResources.electionInfoUrl}</a>
				</div>
			);
		}
		if (stateResources.electionRegistrationConfirmationUrl) {
			additionalResourceArr.push(
				<div>Voter Registration Confirmation: <a href={stateResources.electionRegistrationConfirmationUrl}
				                                         target={'_blank'}
				                                         rel={'nofollow noopener noreferrer'}
				                                         className={'resources-link'}>{stateResources.electionRegistrationConfirmationUrl}</a>
				</div>
			);
		}
		if (stateResources.electionRegistrationUrl) {
			additionalResourceArr.push(
				<div>Voter Registration Information: <a href={stateResources.electionRegistrationUrl}
				                                        target={'_blank'}
				                                        rel={'nofollow noopener noreferrer'}
				                                        className={'resources-link'}>{stateResources.electionRegistrationUrl}</a>
				</div>
			);
		}
		if (stateResources.electionRulesUrl) {
			additionalResourceArr.push(
				<div>Election Rules: <a href={stateResources.electionRulesUrl}
				                        target={'_blank'}
				                        rel={'nofollow noopener noreferrer'}
				                        className={'resources-link'}>{stateResources.electionRulesUrl}</a>
				</div>
			);
		}
		if (stateResources.votingLocationFinderUrl) {
			additionalResourceArr.push(
				<div>Voting Location Finder: <a href={stateResources.votingLocationFinderUrl}
				                                target={'_blank'}
				                                rel={'nofollow noopener noreferrer'}
				                                className={'resources-link'}>{stateResources.votingLocationFinderUrl}</a>
				</div>
			);
		}
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
