import axios from 'axios';

const api = axios.create({
	baseURL: 'http://ip-api.com/json/'
});

export const getIPAddress = async () => {
    try {
        return await api.get(``);
	} catch (e) {
		return e;
	}
};