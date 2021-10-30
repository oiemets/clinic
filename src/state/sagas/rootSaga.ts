import { takeLatest } from 'redux-saga/effects';
import { GET_PATIENTS } from '../patients';
import { patients } from './patients';

export function* watcherSaga() {
	yield takeLatest(GET_PATIENTS, patients);
}
