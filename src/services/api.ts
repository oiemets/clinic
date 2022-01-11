import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { keysToCamelCase } from 'utils';

class TheClinicAPI {
	private token: string = '';
	private instance: AxiosInstance;

	constructor(baseUrl: string, timeout: number) {
		this.instance = this.createAxiosInstance(baseUrl, timeout);
		this.setupRequestInterceptor();
		this.setupResponseInterceptor();
	}

	private createAxiosInstance = (baseURL: string, timeout: number) =>
		axios.create({ baseURL, timeout });

	private setupRequestInterceptor = () =>
		this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
			if (this.token && config.headers) {
				config.headers['authorization'] = this.token;
			}
			return config;
		});

	private setupResponseInterceptor = () =>
		this.instance.interceptors.response.use((response: AxiosResponse) => {
			response.data = keysToCamelCase(response.data);
			return response;
		});

	post = async (url: string, data: any, config?: AxiosRequestConfig) =>
		this.instance.post(url, data, config);

	get = async (url: string, params?: any) =>
		this.instance.get(url, { params, withCredentials: false });

	setAccessToken = async (token: string) => {
		this.token = token;
	};

	isToken = () => this.token !== '';

	removeAccessToken = () => {
		this.token = '';
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
