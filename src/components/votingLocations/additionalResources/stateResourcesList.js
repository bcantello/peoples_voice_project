import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import StateResourcesListItem from "./stateResourcesListItem";

export default function StateResourcesList() {
	const universalContext = useContext(UniversalContext);
	const data = universalContext.pollingLocations.data;
	let stateResourcesArr = this;
	console.log("DATA from resources",data.state[0].electionAdministrationBody)

	if (data.state[0].electionAdministrationBody !== undefined) {
		stateResourcesArr = data.state.map((e, index) => {
			return (
				<StateResourcesListItem element={e} key={index}/>
			);
		});
	}

	return (
		<div className={'early-vote-locations-wrapper'}>{stateResourcesArr}</div>
	);
}
