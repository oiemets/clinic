import { all, fork } from 'redux-saga/effects';
import { authProviderSaga } from '../AuthProvider';
import { signInSaga } from '../SignIn';

export function* authSaga() {
	yield all([fork(signInSaga), fork(authProviderSaga)]);
}
