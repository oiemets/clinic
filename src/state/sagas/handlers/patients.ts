import { call, put } from 'redux-saga/effects';
import { setPatients } from '../../patients';
import { requestGetPatients } from '../requests/patients';

export function* handleGetPatients(): any {
	try {
		const response = yield call(requestGetPatients);
		const { data } = response;
		yield put(setPatients(data));
	} catch (err) {
		console.log(err);
	}
}
