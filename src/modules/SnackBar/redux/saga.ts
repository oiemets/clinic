import { all, takeLatest, put } from 'redux-saga/effects';
import {
	addSnackBar,
	showSuccessSnackBar,
	showErrorSnackBar,
} from './snackBarSlice';

function* createShowSuccessSnackBar({
	payload,
}: {
	payload: { message: string };
}) {
	yield put(
		addSnackBar({
			type: 'success',
			message: payload.message,
		})
	);
}

function* createShowErrorSnackBar({
	payload,
}: {
	payload: { message: string };
}) {
	yield put(
		addSnackBar({
			type: 'error',
			message: payload.message,
		})
	);
}

export function* snackBarSaga() {
	yield all([
		takeLatest(showSuccessSnackBar, createShowSuccessSnackBar),
		takeLatest(showErrorSnackBar, createShowErrorSnackBar),
	]);
}
