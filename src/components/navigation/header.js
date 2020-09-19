import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {UniversalContext} from "../../App";
import './navigation.css'

export default function Header() {
	const universalContext = useContext(UniversalContext);
	let userState = universalContext.userIpInfo;
	let state;

	if (userState.region_code) {
		state = userState.region_code.toLowerCase();
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
			<a className={'nav-link'}
			   href={`https://vote.gov/register/${state}`}
			   target="_blank"
			   rel="nofollow noopener noreferrer"
			   style={{textDecoration: 'none'}}>
				<div><span><b>Register to Vote</b></span></div>
			</a>
			<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
				<div><span>About</span></div>
			</Link>
			<Link className={'nav-link'} to={'/contact'} style={{textDecoration: 'none'}}>
				<div><span>Contact</span></div>
			</Link>
		</nav>
	);
};
