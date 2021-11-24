import { all, fork } from 'redux-saga/effects';
import { signInSaga } from '../SignIn';

export function* authSaga() {
	yield all([fork(signInSaga)]);
}
