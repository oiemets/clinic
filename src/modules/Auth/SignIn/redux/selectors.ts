import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const readyToRedirect = createSelector(authSelector, auth => {
	return auth?.authProvider?.readyToRedirect;
});
