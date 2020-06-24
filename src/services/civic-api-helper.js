import axios from 'axios';

require('dotenv').config();

const apiKey = `&key=${process.env.REACT_APP_CIVIC_API_KEY}`;
const api = axios.create({
	baseURL: 'https://www.googleapis.com/civicinfo/v2/'
});

export const getElectedOfficials = async (address) => {
	try {
		return await api.get(`representatives?address=${address}${apiKey}`);
	} catch (e) {
		return e;
	}
};

export const getUpcomingElections = async () => {
	try {
		return await api.get(`elections?${apiKey}`);
	} catch (e) {
		return e;
	}
};

export const getPollingLocations = async (address) => {
	try {
		return await api.get(`voterinfo?address=${address}${apiKey}`);
	} catch (e) {
		return e;
	}
};
