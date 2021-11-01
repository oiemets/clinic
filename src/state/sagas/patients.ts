import { call, put } from 'redux-saga/effects';
import { patientsLoadSuccess } from '../actions';
import { api } from '../../api';

export function* patients(): any {
	try {
		const response = yield call(api.patients().list);
		const data = response;
		yield put(patientsLoadSuccess(data));
	} catch (err) {
		console.log(err);
	}
}
