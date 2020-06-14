import React from "react";
import {Link} from 'react-router-dom';
import './navigation.css'

export default function Header() {
	return (
		<nav>
			<Link classname={'nav-link'} to={'/'} style={{textDecoration: 'none'}}>
				<div>Home</div>
			</Link>
			<Link classname={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
				<div>About</div>
			</Link>
			<Link classname={'nav-link'} to={'/contact'} style={{textDecoration: 'none'}}>
				<div>Contact</div>
			</Link>
		</nav>
	);
};
