import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const wizardProviderSelector = (state: AppState) => state.wizardProvider;

export const getSpecializationsSelector = createSelector(
	wizardProviderSelector,
	wizard => {
		if (!wizard) return [];
		return wizard.specializations;
	}
);

export const getDoctorsSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return [];
		return wizard.doctorsBySpecialty;
	}
);
