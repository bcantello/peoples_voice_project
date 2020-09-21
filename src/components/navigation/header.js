import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {UniversalContext} from "../../App";
import './navigation.css'

export default function Header() {
	const universalContext = useContext(UniversalContext);
	let userState = universalContext.userIpInfo;
	const registerToVote = [];

	// Check for state in user ip info. If State, send to state specific registration page. If not, sed to generic.
	if (userState.region_code) {
		let state = userState.region_code.toLowerCase();
		registerToVote.push(
			<a className={'nav-link'}
			   href={`https://vote.gov/register/${state}`}
			   target="_blank"
			   rel="nofollow noopener noreferrer"
			   style={{textDecoration: 'none'}}>
				<div><span><b>Register to Vote</b></span></div>
			</a>);
	} else {
		registerToVote.push(
			<a className={'nav-link'}
			   href={`https://vote.gov/`}
			   target="_blank"
			   rel="nofollow noopener noreferrer"
			   style={{textDecoration: 'none'}}>
				<div><span><b>Register to Vote</b></span></div>
			</a>
		);
	}

	return (
		<nav>
			<Link className={'nav-link'} to={'/'} style={{textDecoration: 'none'}}>
				<div><span>Home</span></div>
			</Link>
			<Link className={'nav-link'} to={'/upcomingElections'} style={{textDecoration: 'none'}}>
				<div><span>Upcoming Elections</span></div>
			</Link>
			{/*External Link in Nav to voter registration*/}
			{registerToVote}
			<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
				<div><span>About</span></div>
			</Link>
			<Link className={'nav-link'} to={'/contact'} style={{textDecoration: 'none'}}>
				<div><span>Contact</span></div>
			</Link>
		</nav>
	);
};
