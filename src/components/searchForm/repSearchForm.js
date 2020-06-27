import React, {useContext, useState} from "react";
import {UniversalContext} from "../../App";
import {getElectedOfficials, getPollingLocations} from "../../services/civic-api-helper";
import history from "../../history";
import './repSearchForm.css';

export default function RepSearchForm() {
	const universalContext = useContext(UniversalContext);
	const [userAddress, setUserAddress] = useState({
		address: "",
		city: "",
		state: "",
		zip: "",
	});
	const address = universalContext.addressFormatter(userAddress);

	const handleSubmitReps = e => {
		e.preventDefault();
		getElectedOfficials(address).then(res => {
			if (res.status === 200) {
				universalContext.setOfficials(res);
				sessionStorage.setItem('electedOfficials', JSON.stringify(res));
				history.push('/electedOffices');
			} else {
				document.getElementById('error-response')
					.innerHTML = "Invalid address. Please ensure all fields are filled out correctly"
			}
		}).catch(e => {
			return e;
		});
	};

	const handleSubmitPolls = e => {
		e.preventDefault();
		getPollingLocations(address).then(res => {
			if (res.status === 200) {
				universalContext.setPollingLocations(res);
				sessionStorage.setItem('pollingLocations', JSON.stringify(res));
				history.push('/pollingLocationDetails');
			} else {
				document.getElementById('error-response')
					.innerHTML = "Either an incorrect address was entered, or there are no upcoming elections for this location."
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
				<form className={'rep-search-form'} >
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
					<div id={'home-form-btn-container'}>
						<button className="address-form-button"
						        type="submit"
						        onClick={handleSubmitReps}>Find Rep.</button>
						<button className="address-form-button"
						        type="submit"
						        onClick={handleSubmitPolls}>See Elections</button>
					</div>
					<div id={'error-response'}></div>
				</form>
			</div>
		</div>
	);
};
