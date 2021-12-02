import { all, takeLatest, put, call } from 'redux-saga/effects';
import { apiService } from 'services';
import { signInRequest, signInError } from './signInSlice';
import { setAuth, authenticate, getProfile, showErrorSnackBar } from 'modules';
import { AxiosResponse } from 'axios';

function* createSignIn({ payload }: any) {
	try {
		const response: AxiosResponse = yield call(apiService.signIn, payload);
		yield put(setAuth(response.data));
		yield put(authenticate());
		yield put(getProfile());
	} catch (error: any) {
		yield put({
			...showErrorSnackBar(),
			payload: { message: error.response.data },
		});
		yield put(signInError());
	}
}

export function* signInSaga() {
	yield all([takeLatest(signInRequest, createSignIn)]);
}
