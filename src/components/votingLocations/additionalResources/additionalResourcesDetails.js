import React from "react";
import StateResourcesList from "./stateResourcesList";
import '../votingLocations.css';
import history from "../../../history";

export default function AdditionResourceDetails() {
	return (
		<div className={'resources-container'}>
			<div className={'resources-title'}>Voter Resources</div>
			<span className={'voting-sites-link'} onClick={() => history
				.push('/votingLocations')}>Return to Voting Locations Details</span>
			<StateResourcesList/>
		</div>
	);
}
