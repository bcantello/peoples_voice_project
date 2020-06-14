import React from "react";
import RepSearchForm from "../repSearchForm/repSearchForm";
import './home.css';

export default function Home() {
	return (
		<>
			<div>
				<p className={'home-intro'}>The People's Voice Project exists to amplify the voices of each and every
					person through direct access to the elected officials who represent them. After all, a government of
					the people, by the people, and for the people, must hear from the people! Enter your zip code to
					find the representatives who have been elected to serve you.</p>
			</div>
			<RepSearchForm/>
		</>
	);
};
