import React from "react";
import RepSearchForm from "../repSearchForm/repSearchForm";
import './home.css';

export default function Home() {
	return (
		<>
			<div>
				<p className={'home-intro'}>Enter your address to find the contact information for the government
					representatives who have been elected to serve you.</p>
			</div>
			<RepSearchForm/>
		</>
	);
};
