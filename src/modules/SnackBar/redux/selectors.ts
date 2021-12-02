import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const snackBar = (state: AppState) => state.snackBar;

export const snackBarSelector = createSelector(snackBar, data => {
	return data;
});
