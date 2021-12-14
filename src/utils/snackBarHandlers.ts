import { put } from 'redux-saga/effects';
import { refreshTokens, showErrorSnackBar, showSuccessSnackBar } from 'modules';

export function* errorHandler(error: any) {
	if (error.response.status === 401 && error.response.data === 'wrong token') {
		yield put(refreshTokens());
	}
	yield put({
		...showErrorSnackBar(),
		payload: {
			message: error.response.data + ' - ' + error.response.statusText,
		},
	});
}

export function* successMessageHandler(message: string) {
	yield put({
		...showSuccessSnackBar(),
		payload: { message },
	});
}
