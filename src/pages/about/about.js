import React from "react";
import './about.css';

import Brandon from '../../assets/team/brandon.svg';
import Carly from '../../assets/team/carly.svg';

export default function About() {
	return (
		<div id={'about-content'}>
			<p id={'statement-of-purpose'}>The People's Voice Project exists to amplify the voices of each and every
				person through
				direct access to the elected officials who represent them. After all, a government of the people, by the
				people, and for the people, must hear from the people! </p>
			<div className="team-members">
				<div className="member-1">
					<div className="member-img"><img className={'member-photo'} src={Brandon} alt={'Brandon'}/></div>
					<div className="member-content">
						<h2 className="member-name">Brandon Cantello</h2>
						<h3 className="member-title">Founder, Chief Engineer</h3>
					</div>
					<p className="about-member">Shortly after graduating from the <a
						href="https://www.physics.ucsb.edu/" target="_blank" rel="nofollow noopener noreferrer"
						style={{textDecoration: 'none', color: '#197278'}}>University of California Santa Barbara</a> with a degree in Physics, Brandon joined the
						engineering team at <a href="https://www.payjunction.com/payments/" target="_blank"
						                       rel="nofollow noopener noreferrer"
						                       style={{textDecoration: 'none', color: '#197278'}}>PayJunction</a> as a
						software engineer. While there he further honed his skills as an engineer in a test driven
						development environment.<br/><br/>
						Prior to finding a passion for engineering and Physics, he spent over five years managing teams within the finance sector.<br/><br/>
						Currently he is a software engineer based in Santa Barbara CA who enjoys building
						user centric applications and websites that are as intuitive as they are dynamic.</p>
					<div className="social-links">
						<div className="linkedin">
							<a href="https://www.linkedin.com/in/brandon-cantello/" target="_blank"
							   rel="nofollow noopener noreferrer" title="LinkedIn"><i
								className="icon-social-linkedin"></i></a>
						</div>
						<div className="portfolio">
							<a href="http://brandoncantello.com/" target="_blank" rel="nofollow noopener noreferrer"
							   title="Portfolio"><i className="icon-globe"></i></a>
						</div>
						<div className="github">
							<a href="https://github.com/bcantello" target="_blank" rel="nofollow noopener noreferrer"
							   title="GitHub"><i className="icon-social-github"></i></a>
						</div>
					</div>
				</div>


				<div className="member-2">
					<div className="member-img"><img className={'member-photo'} src={Carly} alt={'Carly'}/></div>
					<div className="member-content">
						<h2 className="member-name">Carly Nicholson</h2>
						<h3 className="member-title">User Interface</h3>
					</div>
					<p className="about-member">Passionate, driven software engineer evolved from a former tech startup marketing manager focused on creatively solving problems.<br/><br/>
					My multifaceted skills from years working in marketing sharpened the natural eye I have for design and details - providing a unique foundation when making the switch to software engineering.<br/><br/>
					A catalyst for modernism, I leverage my love of learning and overall determination to facilitate innovation for leading technology professionals who strive to be dynamic and grow their business. My approach combines the flexible with the analytical — allowing for creativity with an emphasis on structure and implementation.
					</p>
					<div className="social-links">
						<div className="linkedin">
							<a href="https://www.linkedin.com/in/carlypnicholson/" target="_blank"
							   rel="nofollow noopener noreferrer" title="LinkedIn"><i
								className="icon-social-linkedin"></i></a>
						</div>
						<div className="portfolio">
							<a href="https://carlynicholson.github.io/portfolio/" target="_blank"
							   rel="nofollow noopener noreferrer" title="Portfolio"><i className="icon-globe"></i></a>
						</div>
						<div className="github">
							<a href="https://github.com/carlynicholson" target="_blank"
							   rel="nofollow noopener noreferrer" title="GitHub"><i className="icon-social-github"></i></a>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};
