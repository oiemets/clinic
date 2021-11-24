import { axiosInstance } from './api';

let store: any;

export const injectStore = (_store: any) => {
	store = _store;
};

axiosInstance.interceptors.request.use((config: any) => {
	const access_token = store.getState().auth.authProvider.access_token;
	if (access_token) {
		config.headers['authorization'] = access_token;
	}

	return config;
});
