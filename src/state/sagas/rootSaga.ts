import { takeLatest } from 'redux-saga/effects';
import { GET_PATIENTS } from '../patients';
import { handleGetPatients } from './handlers/patients';

export function* watcherSaga() {
	yield takeLatest(GET_PATIENTS, handleGetPatients);
}
