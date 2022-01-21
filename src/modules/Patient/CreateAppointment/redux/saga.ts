import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import {
	getSpecializationsRequest,
	getDoctorsBySpecialtyRequest,
	getFreeTimeForVisitRequest,
	createNewAppointmentRequest,
} from 'services';
import { AxiosResponse } from 'axios';
import { errorHandler, successMessageHandler } from 'utils';
import {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialtyID,
	setDoctorsBySpecialtyID,
	getAvailableAppointments,
	setAvailableAppointments,
	setAppointmentConfirmationData,
	submitCreateAppointmentForm,
	resetForm,
} from './createAppointmentSlice';
import { appointmentConfirmationStatusSelector } from './selectors';
import { CreateAppointmentValues } from 'types';
import { NavigateFunction } from 'react-router-dom';

function* getSpecializationsSaga() {
	try {
		const { data }: AxiosResponse = yield call(getSpecializationsRequest);
		yield put(setSpecializations(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* getDoctorsBySpecialtyIdSaga({ payload }: { payload: string }) {
	try {
		const { data }: AxiosResponse = yield call(
			getDoctorsBySpecialtyRequest,
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
	payload: { date: Date; doctorID: string };
}) {
	try {
		const { data }: AxiosResponse = yield call(
			getFreeTimeForVisitRequest,
			date,
			doctorID
		);
		yield put(setAvailableAppointments(data));
	} catch (error: any) {
		errorHandler(error);
	}
}

function* submitCreateAppointmentFormSaga({
	payload: { values, navigate },
}: {
	payload: {
		values: CreateAppointmentValues;
		navigate: NavigateFunction;
	};
}) {
	try {
		const { data }: AxiosResponse = yield call(
			createNewAppointmentRequest,
			values
		);
		yield put(setAppointmentConfirmationData(data));
		const status: string = yield select(appointmentConfirmationStatusSelector);
		yield successMessageHandler(
			`Your request has been sent. Status: ${status}`
		);
		navigate('/appointments');
		yield put(resetForm());
	} catch (error: any) {
		errorHandler(error);
	}
}

export function* createAppointmentSaga() {
	yield all([
		takeLatest(getSpecializations, getSpecializationsSaga),
		takeLatest(getDoctorsBySpecialtyID, getDoctorsBySpecialtyIdSaga),
		takeLatest(getAvailableAppointments, getAvailableAppointmentsSaga),
		takeLatest(submitCreateAppointmentForm, submitCreateAppointmentFormSaga),
	]);
}
