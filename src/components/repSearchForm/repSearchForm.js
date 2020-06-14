import React, {useContext, useState} from "react";
import {UniversalContext} from "../../App";
import {getElectedOfficials} from "../services/api-helper";

export default function RepSearchForm() {
	const universalContext = useContext(UniversalContext);
	const [zipInput, setZipInput] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		getElectedOfficials(zipInput).then(res => {
			if (res.status === 200) {
				universalContext.setOfficials(res);
				localStorage.setItem('electedOfficials', JSON.stringify(res));
			} else {
				console.log('error');
			}
		}).catch(e => {
			return e;
		});
	};

	const handleZipChange = e => {
		const zip = e.target.value;
		setZipInput(zip);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div id={'zip-input-container'}>
				<div>
					<input
						className="zip-field"
						type="text"
						placeholder={'Zipcode'}
						value={zipInput}
						onChange={handleZipChange}
					/>
				</div>
			</div>
			<input className={'rep-search-btn'} type="submit" value="Search"/>
		</form>
	);
};
