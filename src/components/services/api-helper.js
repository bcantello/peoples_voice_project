import axios from 'axios';

require('dotenv').config();

const api = axios.create({
	baseURL: 'https://www.googleapis.com/civicinfo/v2/'
});

export const getElectedOfficials = async (zip) => {
	const apiKey = `&key=${process.env.REACT_APP_CIVIC_API_KEY}`;
	try {
		return await api.get(`representatives?address=${zip}${apiKey}`);
	} catch (e) {
		return e;
	}
};
