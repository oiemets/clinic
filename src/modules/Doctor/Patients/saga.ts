import { call, put } from 'redux-saga/effects';
import { requestGetPatients } from '../../../services';
import { loadingSuccess } from './slice';

export function* loadingPatients(): any {
	try {
		const response = yield call(requestGetPatients);
		const { data } = response;
		yield put(loadingSuccess(data));
	} catch (err) {
		console.log(err);
	}
}
