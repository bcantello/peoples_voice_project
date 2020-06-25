import React from "react";
import {Link} from 'react-router-dom';
import './navigation.css'

export default function Header() {
	return (
		<nav>
			<Link className={'nav-link'} to={'/'} style={{textDecoration: 'none'}}>
				<div><span>Home</span></div>
			</Link>
			<Link className={'nav-link'} to={'/upcomingElections'} style={{textDecoration: 'none'}}>
				<div><span>Upcoming Elections</span></div>
			</Link>
			<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
				<div><span>About</span></div>
			</Link>
		</nav>
	);
};
