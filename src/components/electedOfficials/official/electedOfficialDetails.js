import React, {useContext} from "react";
import {UniversalContext} from "../../../App";
import '../electedOfficials.css';

export default function ElectedOfficialDetails() {
	const universalContext = useContext(UniversalContext);
	const official = universalContext.officials.data.officials[localStorage.getItem('officialIndex')];
	let officialData = [];

	if (official.name !== undefined) {
		officialData.push(<div id={'official-name'}>{official.name}: {official.party}</div>);
	}

	if (official.photoUrl !== undefined) {
		officialData.push(<img id={'official-image'} src={official.photoUrl} alt={`${official.name}`}/>);
	}

	if (official.emails !== undefined) {
		officialData.push(<div id={'official-email'}>Email: <a href={`mailto:${official.emails}`}>{official.emails}</a></div>);
	}

	if (official.address !== undefined) {
		const address = official.address[0];
		officialData.push(<div id={'official-address'}>Address: {address.line1}, {address.city} {address.state}, {address.zip}</div>);
	}

	if (official.phones !== undefined) {
		officialData.push(<div id={'official-phone'}>Phone: {official.phones}</div>)
	}

	if (official.urls !== undefined) {
		officialData.push(<div id={'official-website'}>Website: <a href={official.urls} target="_blank" rel="nofollow noopener noreferrer">{official.urls}</a></div>);
	}

	if (official.channels !== undefined) {
		for (let i = 0; i < official.channels.length; i++) {
			if (official.channels[i].type === "Facebook") {
				officialData.push(
					<div className={'official-social'}>{official.channels[i].type}:
						<a href={`https://www.facebook.com/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
			if (official.channels[i].type === "Twitter") {
				officialData.push(
					<div className={'official-social'}>{official.channels[i].type}:
						<a href={`https://twitter.com/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
			if (official.channels[i].type === "YouTube") {
				officialData.push(
					<div className={'official-social'}>{official.channels[i].type}:
						<a href={`https://www.youtube.com/user/${official.channels[i].id}`}
						   target="_blank"
						   rel="nofollow noopener noreferrer"> {official.channels[i].id}
						</a>
					</div>
				);
			}
		}
	}

	return (
		<div className={'official-details-container'}>{officialData}</div>
	);
};
