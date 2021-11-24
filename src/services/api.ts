import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({ baseURL, timeout: 15000 });

const post = async (url: string, data: any, params?: any) => {
	return axiosInstance.post(url, data, { params });
};

const get = async (url: string, params?: any) => {
	return axiosInstance.get(url, { params });
};

export const signIn = (data: any) => post('auth/login', data);

export const getProfileRequest = (params?: any) => get('auth/profile', params);
