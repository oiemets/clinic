import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const patientResolutionsSelector = (state: AppState) =>
	state.patientResolutions;

export const getAllPatientResolutionsSelector = createSelector(
	patientResolutionsSelector,
	data => (data?.resolutions ? data.resolutions : [])
);
