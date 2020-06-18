import React, {useContext, useState} from "react";
import {UniversalContext} from "../../App";
import {getPollingLocations} from "../services/civic-api-helper";
import history from "../../history";
import '../electedOfficials/repSearchForm/repSearchForm.css';

export default function PollingLocationsSearchForm() {
	const universalContext = useContext(UniversalContext);
	const [userAddress, setUserAddress] = useState({
		address: "",
		city: "",
		state: "",
		zip: "",
	});

	const handleSubmit = e => {
		e.preventDefault();
		getPollingLocations(universalContext.addressFormatter).then(res => {
			if (res.status === 200) {
				universalContext.setPollingLocations(res);
				localStorage.setItem('pollingLocations', JSON.stringify(res));
				history.push('/pollingLocations');
			} else {
				document.getElementById('error-response')
					.innerHTML = "Invalid address. Please ensure all fields are filled out correctly"
			}
		}).catch(e => {
			return e;
		});
	};

	const handleAddressChange = e => {
		const {name, value} = e.target;
		setUserAddress({...userAddress, [name]: value});
	};

	return (
		<div className={'address-form-container'}>
			<div className={'address-form'}>
				<div className={'address-form-title'}><h1>Polling Location Search</h1></div>
				<form className={'rep-search-form'} onSubmit={handleSubmit}>
					<input
						className="address-form-field"
						type="text"
						name={'address'}
						placeholder={'Address'}
						value={userAddress.address}
						onChange={handleAddressChange} required
					/>
					<input
						className="address-form-field"
						type="text"
						name={'city'}
						placeholder={'City'}
						value={userAddress.city}
						onChange={handleAddressChange} required
					/>
					<input
						className="address-form-field"
						type="text"
						name={'state'}
						placeholder={'State'}
						value={userAddress.state}
						onChange={handleAddressChange} required
					/>
					<input
						className="address-form-field"
						type="text"
						name={'zip'}
						placeholder={'Zipcode'}
						value={userAddress.zip}
						onChange={handleAddressChange} required
					/>
					<button className="address-form-button" type="submit">Search</button>
					<div id={'error-response'}></div>
				</form>
			</div>
		</div>
	);
};