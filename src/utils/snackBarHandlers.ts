import { put } from 'redux-saga/effects';
import { refreshTokens, showErrorSnackBar, showSuccessSnackBar } from 'modules';

export function* errorHandler(error: any) {
	if (
		error.response.status === 403 &&
		error.response.data === 'message: wrong token'
	) {
		yield put(refreshTokens());
	}
	yield put(
		showErrorSnackBar({
			message: error.response.data + ' - ' + error.response.statusText,
		})
	);
}

export function* successMessageHandler(message: string) {
	yield put(showSuccessSnackBar({ message }));
}
