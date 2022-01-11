import { takeLatest, all, put, call } from 'redux-saga/effects';
import { getAllResolutionsRequest } from 'services';
import { AxiosResponse } from 'axios';
import { errorHandler } from 'utils';

import {
	getAllResolutions,
	setAllResolutions,
} from './patientResolutionsSlice';

function* createGetAllResolutions() {
	try {
		const { data }: AxiosResponse = yield call(getAllResolutionsRequest);
		yield put(setAllResolutions(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* patientResolutionsSaga() {
	yield all([takeLatest(getAllResolutions, createGetAllResolutions)]);
}
