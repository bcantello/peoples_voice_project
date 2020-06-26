import axios from 'axios';

const api = axios.create({
	baseURL: 'https://ipapi.co/json/'
});

export const getIPAddress = async () => {
    try {
        return await api.get(``);
	} catch (e) {
		return e;
	}
};