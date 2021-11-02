import { takeLatest } from 'redux-saga/effects';
import { loadingPatients } from '../modules';

export function* watcherSaga() {
	yield takeLatest('patients/loadingStart', loadingPatients);
}
