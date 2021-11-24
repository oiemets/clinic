import { call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
// import { signOutRequest } from '../modules';

export const requestWrapper = (
	request: (data: any) => Promise<AxiosResponse<any, any>>,
	data: any
) =>
	call(function* sagaRequest() {
		try {
			const { response } = yield call(request, data);
			return response;
		} catch (error: any) {
			console.log('here');
			return error;
		}
	});
