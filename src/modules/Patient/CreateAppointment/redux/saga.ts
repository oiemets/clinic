import { takeLatest, all, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { AxiosResponse } from 'axios';
import { errorHandler } from 'utils';
import {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialtyID,
	setDoctorsBySpecialtyID,
	getAvailableAppointments,
	setAvailableAppointments,
} from './createAppointmentSlice';

function* getSpecializationsSaga() {
	try {
		const { data }: AxiosResponse = yield call(apiService.getSpecializations);
		yield put(setSpecializations(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* getDoctorsBySpecialtyIdSaga({ payload }: { payload: string }) {
	try {
		const { data }: AxiosResponse = yield call(
			apiService.getDoctorsBySpecialty,
			payload
		);
		yield put(setDoctorsBySpecialtyID(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* getAvailableAppointmentsSaga({
	payload: { date, doctorID },
}: {
	payload: { date: string; doctorID: string };
}) {
	try {
		const { data }: AxiosResponse = yield call(
			apiService.getFreeTimeForVisit,
			date,
			doctorID
		);
		yield put(setAvailableAppointments(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* createAppointmentSaga() {
	yield all([
		takeLatest(getSpecializations, getSpecializationsSaga),
		takeLatest(getDoctorsBySpecialtyID, getDoctorsBySpecialtyIdSaga),
		takeLatest(getAvailableAppointments, getAvailableAppointmentsSaga),
	]);
}
