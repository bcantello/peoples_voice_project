import React from "react";
import {Link} from 'react-router-dom';
import './navigation.css'

export default function Header() {
	let userIp = JSON.parse(sessionStorage.getItem('userIp'));
	let userState;

	if (userIp) {
		userState = userIp.region_code.toLowerCase();
	}

	console.log(userState);

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
			   href={`https://vote.gov/register/${userState}`}
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
