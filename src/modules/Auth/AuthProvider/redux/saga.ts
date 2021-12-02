import { select, takeLatest, all, put, call } from 'redux-saga/effects';
import { getAccessToken, getRefreshToken } from './selectors';
import { apiService } from 'services';
import { AuthProvider } from 'types';
import {
	authenticate,
	setProfile,
	getProfile,
	signOutRequest,
	refreshTokens,
	removeAccessToken,
	setRefreshedTokens,
} from './authProviderSlice';
import { showSuccessSnackBar, showErrorSnackBar } from 'modules';
import { AxiosResponse } from 'axios';
import { errorHandler } from 'utils';

function* authenticateUser() {
	const token: AuthProvider['accessToken'] = yield select(getAccessToken);
	if (token) {
		apiService.setAccessToken(token);
	}
}

function* createGetProfile() {
	try {
		const { data }: AxiosResponse = yield call(apiService.getProfile);
		yield put(setProfile(data));

		yield put({
			...showSuccessSnackBar(),
			payload: { message: 'successfuly signed in' },
		});
	} catch (error: any) {
		errorHandler(error);
	}
}

function* createSignedOutRequest() {
	yield put({
		...showSuccessSnackBar(),
		payload: { message: 'Signed out' },
	});
}

function* createRefreshTokenRequest() {
	try {
		yield put(removeAccessToken());
		apiService.removeAccessToken();
		const currentRefreshToken: AuthProvider['refreshToken'] = yield select(
			getRefreshToken
		);
		const refreshedTokens: AxiosResponse = yield call(
			apiService.refreshToken,
			currentRefreshToken
		);
		yield put(setRefreshedTokens(refreshedTokens.data));
	} catch (error: any) {
		yield put({
			...showErrorSnackBar(),
			payload: { message: error.response.data },
		});
	}
}

export function* authProviderSaga() {
	yield all([
		takeLatest(authenticate, authenticateUser),
		takeLatest(getProfile, createGetProfile),
		takeLatest(signOutRequest, createSignedOutRequest),
		takeLatest(refreshTokens, createRefreshTokenRequest),
	]);
}
