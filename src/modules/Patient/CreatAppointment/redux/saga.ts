import { select, takeLatest, all, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { AxiosResponse } from 'axios';
import {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialty,
	setDoctorsBySpecialty,
	getAvailableAppointments,
	setAvailableAppointments,
	setSelectedAppointmentTime,
	submitForm,
	setAppointmentConfirmationData,
} from './createAppointmentSlice';
import { errorHandler, successMessageHandler } from 'utils';
import {
	getSelectedDoctorIDSelector,
	getAppointmentConfirmationStatusSelector,
} from './selectors';

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

function* createGetAvailableAppointments({ payload }: any) {
	try {
		const doctorID: string = yield select(getSelectedDoctorIDSelector);
		const { data }: AxiosResponse = yield call(
			apiService.getFreeTimeForVisit,
			payload,
			doctorID
		);
		yield put(setAvailableAppointments(data));
		yield put(setSelectedAppointmentTime(''));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* createSubmitForm({ payload }: any) {
	try {
		const { data }: AxiosResponse = yield call(
			apiService.createNewAppointment,
			payload
		);
		yield put(setAppointmentConfirmationData(data));
		const status: string = yield select(
			getAppointmentConfirmationStatusSelector
		);
		yield successMessageHandler(
			`Your request has been sent. Status: ${status}`
		);
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* createAppointmentSaga() {
	yield all([
		takeLatest(getSpecializations, createGetSpecializations),
		takeLatest(getDoctorsBySpecialty, createGetDoctorsBySpecialty),
		takeLatest(getAvailableAppointments, createGetAvailableAppointments),
		takeLatest(submitForm, createSubmitForm),
	]);
}
