import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { mapKeys, camelCase, rearg } from 'lodash';
import { AuthProvider } from 'types';

class TheClinicAPI {
	private token: AuthProvider['accessToken'] = '';
	private instance: AxiosInstance;

	constructor(baseUrl: string, timeout: number) {
		this.instance = this.createAxiosInstance(baseUrl, timeout);
		this.setupRequestInterceptor();
		this.setupResponseInterceptor();
	}

	private createAxiosInstance = (baseURL: string, timeout: number) =>
		axios.create({ baseURL, timeout });

	private post = async (url: string, data: any, config?: AxiosRequestConfig) =>
		this.instance.post(url, data, config);

	private get = async (url: string, params?: any) =>
		this.instance.get(url, { params });

	private setupRequestInterceptor = () =>
		this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
			if (this.token && config.headers) {
				config.headers['authorization'] = this.token;
			}
			return config;
		});

	private setupResponseInterceptor = () =>
		this.instance.interceptors.response.use((response: AxiosResponse) => {
			response.data = mapKeys(response.data, rearg(camelCase, 1));
			return response;
		});

	setAccessToken = async (token: AuthProvider['accessToken']) => {
		this.token = token;
	};

	removeAccessToken = () => {
		this.token = '';
	};

	signIn = (data: any) => this.post('auth/login', data);

	getProfile = (params?: any) => this.get('auth/profile', params);

	refreshToken = async (refreshToken: AuthProvider['refreshToken']) => {
		const token = refreshToken ?? '';
		return this.post('auth/token/refresh', null, {
			headers: { authorization: token },
		});
	};
}

const createApiService = (url: string | undefined, timeout: number) => {
	if (!url) {
		throw new Error('URL is needed!');
	}
	return new TheClinicAPI(url, timeout);
};

export const apiService = createApiService(
	process.env.REACT_APP_BASE_URL,
	15000
);
