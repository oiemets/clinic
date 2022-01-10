import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const createAppointmentSelector = (state: AppState) => state.createAppointment;

export const getSpecializationsSelector = createSelector(
	createAppointmentSelector,
	createAppointment =>
		createAppointment?.specializations.map(({ id, specializationName }) => ({
			value: id,
			label: specializationName,
		}))
);

export const getDoctorsSelector = createSelector(
	createAppointmentSelector,
	createAppointment =>
		createAppointment?.doctors.map(({ id, firstName, lastName }) => ({
			value: id,
			label: `${firstName} ${lastName}`,
		}))
);

export const getAvailableAppointmentsSelector = createSelector(
	createAppointmentSelector,
	createAppointment => createAppointment?.availableAppointments
);
