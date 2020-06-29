import React from "react";
import StateResourcesList from "./stateResourcesList";
import '../votingLocations.css';

export default function AdditionResourceDetails() {
	return (
		<div className={'resources-container'}>
			<div className={'resources-title'}>Voter Resources</div>
			<StateResourcesList/>
		</div>
	);
}
