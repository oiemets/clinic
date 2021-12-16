import { all, fork } from 'redux-saga/effects';
import {
	authSaga,
	snackBarSaga,
	createAppointmentSaga,
	patientAppointmentsSaga,
	patientResolutionsSaga,
} from '../modules';

export function* rootSaga() {
	yield all([
		fork(authSaga),
		fork(snackBarSaga),
		fork(createAppointmentSaga),
		fork(patientAppointmentsSaga),
		fork(patientResolutionsSaga),
	]);
}
