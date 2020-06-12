import React from "react";
import RepSearchForm from "../repSearchForm/repSearchForm";
import ElectedOfficialsList from "../electedOfficials/electedOfficialsList";

export default function Home() {
	return (
		<>
			<RepSearchForm/>
			<ElectedOfficialsList/>
		</>
	)
};
