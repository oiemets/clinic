import { all, fork } from 'redux-saga/effects';
import {
	authSaga,
	snackBarSaga,
	wizardProviderSaga,
	patientAppointmentsSaga,
} from '../modules';

export function* rootSaga() {
	yield all([
		fork(authSaga),
		fork(snackBarSaga),
		fork(wizardProviderSaga),
		fork(patientAppointmentsSaga),
	]);
}
