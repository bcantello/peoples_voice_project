import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import '../electedOfficials.css';

import Image from '../../../assets/profileImage.png';
import Address from '../../../assets/icons/address.svg';
import Phone from '../../../assets/icons/phone.svg';
import Website from '../../../assets/icons/website.svg';
import Email from '../../../assets/icons/email.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import YouTube from '../../../assets/icons/youtube.svg';

export default function ElectedOfficialDetails() {
	const universalContext = useContext(UniversalContext);
	const official = universalContext.officials.data.officials[sessionStorage.getItem('officialIndex')];
	const officialName = [];
	const officialImage = [];
	const officialData = [];

	if (official.name) {
		officialName.push(<>
			<div id={'official-name'}>{official.name}</div>
			<div id={'official-party'}>{official.party}</div>
		</>);
	}

	if (official.photoUrl) {
		officialImage.push(<img id={'official-image'} src={official.photoUrl} alt={`${official.name}`}/>);
	} else {
		officialImage.push(<img id={'official-placeholder-image'} src={Image} alt={`${official.name}`}/>);
	}

	if (official.address) {
		const address = official.address[0];
		officialData.push(<div id={'official-address'}><img id={'officials-icon'} src={Address}
                                alt={'address'}/>{address.line1}, {address.city} {address.state}, {address.zip}</div>);
	}

	if (official.phones) {
		// Split phone number at spaces to access potential extension numbers and 'ext'
		const phoneArray = official.phones[0].split(" ");
		let officialPhone;
		// Create phone touch to dial phone number based on presence of extension number.
		phoneArray[2] !== undefined ? officialPhone = `tel:${phoneArray[0]} ${phoneArray[1]};ext:${phoneArray[3]}`
									: officialPhone = `tel:${phoneArray[0]} ${phoneArray[1]}`;
		officialData.push(<div id={'official-phone'}><img id={'officials-icon'} src={Phone}
                                alt={'phone'}/><a href={`${officialPhone}`}>{official.phones}</a></div>);
	}

	if (official.emails) {
		officialData.push(<div id={'official-email'}><img id={'officials-icon'} src={Email} alt={'email'}/><a
			id={'official-email'} href={`mailto:${official.emails}`}>{official.emails}</a></div>);
	}

	if (official.urls) {
		officialData.push(<div><img id={'officials-icon'} src={Website} alt={'website'}/><a
			id={'official-website'} href={official.urls} target="_blank"
			rel="nofollow noopener noreferrer">{official.urls}</a></div>);
	}

	if (official.channels) {
		for (let i = 0; i < official.channels.length; i++) {
			if (official.channels[i].type === "Facebook") {
				officialData.push(
					<div className={'details-social'}>
						<img id={'officials-icon'} src={Facebook} alt={'facebook'}/>
						<a className={'official-social'}
						   href={`https://www.facebook.com/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
			if (official.channels[i].type === "Twitter") {
				officialData.push(
					<div className={'details-social'}>
						<img id={'officials-icon'} src={Twitter} alt={'twitter'}/>
						<a className={'official-social'}
						   href={`https://twitter.com/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
			if (official.channels[i].type === "YouTube") {
				officialData.push(
					<div className={'details-social'}>
						<img id={'officials-icon'} src={YouTube} alt={'youtube'}/>
						<a className={'official-social'}
						   href={`https://www.youtube.com/user/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
		}
	}

	return (
		<div className={'official-details-page'}>
			<div className={'official-details-wrapper'}>
				<div className={'official-name-container'}>{officialName}</div>
				<div className={'official-details-container'}>
					<div className={'official-Image-container'}>{officialImage}</div>
					<div className={'official-details'}>{officialData}</div>
				</div>
			</div>
		</div>
	);
};
