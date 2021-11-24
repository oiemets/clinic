import { all, takeLatest, put, call } from 'redux-saga/effects';
import { signIn, getProfileRequest } from 'services';
import { signInRequest, signInSuccess, signInError } from './signInSlice';
import { setAuth, signOutRequest, setProfile } from '../../AuthProvider';
import { AxiosResponse } from 'axios';

function* createSignIn({ payload }: any) {
	try {
		const response: AxiosResponse = yield call(signIn, payload);
		yield put(setAuth(response.data));
		yield put(signInSuccess());

		const getProfile: AxiosResponse = yield call(getProfileRequest);
		yield put(setProfile(getProfile.data));
	} catch (error) {
		yield put(signInError());
		yield put(signOutRequest());
	}
}

export function* signInSaga() {
	yield all([takeLatest(signInRequest, createSignIn)]);
}
