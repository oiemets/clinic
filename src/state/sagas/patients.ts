import { call, put } from 'redux-saga/effects';
import { setPatients } from '../patients';
import { api } from '../../api';

export function* patients(): any {
	try {
		const response = yield call(api.patients().list);
		const data = response;
		yield put(setPatients(data));
	} catch (err) {
		console.log(err);
	}
}
