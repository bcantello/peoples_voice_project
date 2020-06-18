import React, {useContext, useState} from "react";
import {UniversalContext} from "../../App";
import {getElectedOfficials} from "../services/civic-api-helper";
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

	const addressArr = userAddress.address.split(' ');
	let streetAddress = "";
	for (let i = 0; i < addressArr.length; i++) {
		streetAddress = streetAddress + addressArr[i] + '%20';
	}
	const address = `${streetAddress}${userAddress.city}%20${userAddress.state}%20${userAddress.zip}`

	const handleSubmit = e => {
		e.preventDefault();
		getElectedOfficials(address).then(res => {
			if (res.status === 200) {
				universalContext.setOfficials(res);
				localStorage.setItem('electedOfficials', JSON.stringify(res));
				history.push('/electedOffices');
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
				<div className={'address-form-title'}><h1>Representative Search</h1></div>
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
