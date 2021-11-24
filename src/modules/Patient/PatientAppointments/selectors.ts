import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const userProfile = createSelector(authSelector, auth => {
	if (auth?.authProvider?.profile) {
		return auth?.authProvider?.profile;
	}
});
