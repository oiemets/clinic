import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const authSelector = (state: AppState) => state.auth;

export const getAccessToken = createSelector(
	authSelector,
	auth => auth?.authProvider?.accessToken
);

export const getRefreshToken = createSelector(
	authSelector,
	auth => auth?.authProvider?.refreshToken
);

export const userProfile = createSelector(
	authSelector,
	auth => auth?.authProvider?.profile
);

export const isAuthed = createSelector(
	authSelector,
	auth => auth?.authProvider?.isAuthenticated
);

export const userRole = createSelector(
	authSelector,
	auth => auth?.authProvider?.profile?.roleName
);
