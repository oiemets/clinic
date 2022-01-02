import { takeLatest, all, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { AxiosResponse } from 'axios';
import { errorHandler } from 'utils';

import {
	getAllAppointments,
	setAllAppointments,
} from './patientAppointmentsSlice';

function* createGetAllApointments() {
	try {
		const { data }: AxiosResponse = yield call(apiService.getAllAppointments);
		yield put(setAllAppointments(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* patientAppointmentsSaga() {
	yield all([takeLatest(getAllAppointments, createGetAllApointments)]);
}
