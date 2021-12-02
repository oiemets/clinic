import { all, fork } from 'redux-saga/effects';
import { authSaga, snackBarSaga } from '../modules';

export function* rootSaga() {
	yield all([fork(authSaga), fork(snackBarSaga)]);
}
