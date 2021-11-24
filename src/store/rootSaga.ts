import { all, fork } from 'redux-saga/effects';
import { authSaga } from '../modules';

export function* rootSaga() {
	yield all([fork(authSaga)]);
}
