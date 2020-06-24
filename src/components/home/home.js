import React from "react";
import RepSearchForm from "../electedOfficials/repSearchForm/repSearchForm";
import './home.css';

export default function Home() {
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
			<RepSearchForm/>
			</div>
		</>
	);
};
