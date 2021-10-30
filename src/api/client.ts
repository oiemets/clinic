import axios from 'axios';
import { Patients, PatientsListQueryParams } from './types';

export class TheClinicAPIClient {
	static readonly baseUrl = 'https://reactlabapi.herokuapp.com/api/';

	private url = (chunk: string) => TheClinicAPIClient.baseUrl + chunk;

	private doGetRequest = async <T>(url: string) =>
		(await axios.get<T>(url)).data;

	private patientsList = (params: string) =>
		this.doGetRequest<Patients>(this.url(`admin/patients?${params}`));

	patients = () => ({
		list: (params: PatientsListQueryParams = { offset: '0', count: '3' }) =>
			this.patientsList(new URLSearchParams(params).toString()),
	});
}
