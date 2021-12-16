import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const createAppointmentSelector = (state: AppState) => state.createAppointment;

export const getSpecializationsSelector = createSelector(
	createAppointmentSelector,
	createAppointment => {
		if (!createAppointment) return [];
		return createAppointment.specializations;
	}
);

export const getDoctorsSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return [];
		return createAppointment.doctorsBySpecialty;
	}
);

export const getSelectedDoctorIDSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return '';
		return createAppointment.selectedDoctorID;
	}
);

export const isSelectedDoctorIDSelector = createSelector(
	createAppointmentSelector,

	createAppointment => (createAppointment?.selectedDoctorID ? true : false)
);

export const getAvailableAppointmentsSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return [];
		return createAppointment.availableAppointments;
	}
);

export const getSelectedAppointmentTimeSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return '';
		return createAppointment.selectedAppointmentTime;
	}
);

export const getReasonForTheVisitSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return [];
		return createAppointment.reasonForTheVisit;
	}
);

export const getSelectedNoteSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return [];
		return createAppointment.note;
	}
);

export const getAppointmentConfirmationStatusSelector = createSelector(
	createAppointmentSelector,

	createAppointment => {
		if (!createAppointment) return '';
		return createAppointment.appointmentConfirmationData?.status;
	}
);
