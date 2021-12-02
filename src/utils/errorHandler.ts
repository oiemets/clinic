import { put } from 'redux-saga/effects';
import { refreshTokens, showErrorSnackBar } from 'modules';

export const errorHandler = (error: any) => {
	return function* () {
		if (
			error.response.status === 401 &&
			error.response.data === 'wrong token'
		) {
			yield put(refreshTokens());
		}
		yield put({
			...showErrorSnackBar(),
			payload: { message: error.response.data },
		});
	};
};
