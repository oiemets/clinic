import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const userProfile = createSelector(authSelector, auth => {
	if (auth?.authProvider?.profile) {
		return auth?.authProvider?.profile;
	}
});

export const isAuthed = createSelector(authSelector, auth => {
	if (auth?.authProvider?.isAuthenticated) {
		return auth.authProvider.isAuthenticated;
	}
});

export const userRole = createSelector(authSelector, auth => {
	if (auth?.authProvider?.profile.role_name) {
		return auth?.authProvider?.profile.role_name;
	}
});
