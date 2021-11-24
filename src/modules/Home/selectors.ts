import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const userRole = createSelector(authSelector, auth => {
	if (auth?.authProvider?.profile.role_name) {
		return auth?.authProvider?.profile.role_name;
	}
});
