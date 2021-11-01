import { takeLatest } from 'redux-saga/effects';
import { patients } from './patients';

export function* watcherSaga() {
	yield takeLatest('PatientsLoadStart', patients);
}
