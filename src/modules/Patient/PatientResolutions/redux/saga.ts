import { takeLatest, all, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { AxiosResponse } from 'axios';
import { errorHandler } from 'utils';

import {
	getAllResolutions,
	setAllResolutions,
} from './patientResolutionsSlice';

function* createGetAllResolutions() {
	try {
		const { data }: AxiosResponse = yield call(apiService.getAllResolutions);
		yield put(setAllResolutions(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* patientResolutionsSaga() {
	yield all([takeLatest(getAllResolutions, createGetAllResolutions)]);
}
