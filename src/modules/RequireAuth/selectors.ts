import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const isAuth = createSelector(authSelector, auth => {
	if (auth?.authProvider?.isAuthenticated) {
		return auth.authProvider.isAuthenticated;
	}
	return false;
});

export const userRole = createSelector(authSelector, auth => {
	if (auth?.authProvider?.profile.role_name) {
		return auth?.authProvider?.profile.role_name;
	}
});
