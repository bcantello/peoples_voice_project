import React from "react";
import './about.css';

export default function About() {
	return (
		<div id={'about-content'}>
			<p id={'statement-of-purpose'}>The People's Voice Project exists to amplify the voices of each and every
				person through
				direct access to the elected officials who represent them. After all, a government of the people, by the
				people, and for the people, must hear from the people! </p>
			<div className="team-members">
				<div className="member-1">
					{/* <img className="headshot" src={Calendar} alt='Brandon'/> */}
					<div className="member-photo"></div>
					<div className="member-content">
						<h2 className="member-name">Brandon Cantello</h2>
						<h3 className="member-title">Founder, Chief Engineer</h3>
					</div>
					<p className="about-member">Shortly after graduating from the <a
						href="https://www.physics.ucsb.edu/" target="_blank" rel="nofollow noopener noreferrer"
						style={{textDecoration: 'none', color: '#197278'}}>University of California Santa Barbara</a> , I joined the
						engineering team at <a href="https://www.payjunction.com/payments/" target="_blank"
						                       rel="nofollow noopener noreferrer"
						                       style={{textDecoration: 'none', color: '#197278'}}>PayJunction</a> as a
						software engineer. While there I further honed my skills as an engineer in a test driven
						development environment, utilizing technologies like Java, Javascript, Angular.js and HTML/CSS.
						In an effort to further grow my developer skill set I then enrolled in a software engineering
						intensive boot camp through <a href="https://generalassemb.ly/" target="_blank"
						                               rel="nofollow noopener noreferrer"
						                               style={{textDecoration: 'none', color: '#197278'}}>General Assembly</a>. During the
						boot camp I was able to add Python, Django, React, Node.js, Express, MongoDB, and PostgreSQL to
						my repertoire. Currently I'm a software engineer based in Santa Barbara CA. I enjoy building
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
					{/* <img className="headshot" src={Calendar} alt='Carly'/> */}
					<div className="member-photo"></div>
					<div className="member-content">
						<h2 className="member-name">Carly Nicholson</h2>
						<h3 className="member-title">User Interface</h3>
					</div>
					<p className="about-member">Taxidermy 90's man braid tumblr succulents literally paleo tote bag swag
						meh salvia art party you probably haven't heard of them sartorial. Etsy franzen pork belly
						williamsburg heirloom.</p>
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
