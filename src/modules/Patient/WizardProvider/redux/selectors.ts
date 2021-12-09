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

export const getSelectedDoctorIDSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return '';
		return wizard.selectedDoctorID;
	}
);

export const isSelectedDoctorIDSelector = createSelector(
	wizardProviderSelector,

	wizard => (wizard?.selectedDoctorID ? true : false)
);

export const getAvailableAppointmentsSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return [];
		return wizard.availableAppointments;
	}
);

export const getSelectedAppointmentTimeSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return '';
		return wizard.selectedAppointmentTime;
	}
);

export const getReasonForTheVisitSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return [];
		return wizard.reasonForTheVisit;
	}
);

export const getSelectedNoteSelector = createSelector(
	wizardProviderSelector,

	wizard => {
		if (!wizard) return [];
		return wizard.note;
	}
);
