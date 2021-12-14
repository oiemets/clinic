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
import { AxiosResponse } from 'axios';
import { errorHandler, successMessageHandler } from 'utils';

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
		yield successMessageHandler('Successfuly Signed In');
	} catch (error: any) {
		yield errorHandler(error);
	}
}

function* createSignedOutRequest() {
	yield successMessageHandler('Signed out');
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
		yield errorHandler(error);
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
