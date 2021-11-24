import { combineReducers } from '@reduxjs/toolkit';
import { authProviderReducer } from '../AuthProvider';
import { signInReducer } from '../SignIn';

export const authReducers = combineReducers({
	authProvider: authProviderReducer,
	signIn: signInReducer,
});
