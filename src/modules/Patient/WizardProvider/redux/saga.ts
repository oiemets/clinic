import { takeLatest, all, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { AxiosResponse } from 'axios';
import {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialty,
	setDoctorsBySpecialty,
} from './wizardProviderSlice';
import { errorHandler } from 'utils';

function* createGetSpecializations() {
	try {
		const { data }: AxiosResponse = yield call(apiService.getSpecializations);
		yield put(setSpecializations(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* createGetDoctorsBySpecialty({ payload }: any) {
	try {
		const { data }: AxiosResponse = yield call(
			apiService.getDoctorsBySpecialty,
			payload
		);
		yield put(setDoctorsBySpecialty(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* wizardProviderSaga() {
	yield all([
		takeLatest(getSpecializations, createGetSpecializations),
		takeLatest(getDoctorsBySpecialty, createGetDoctorsBySpecialty),
	]);
}
