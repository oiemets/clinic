import { createSelector } from '@reduxjs/toolkit';
import { AppState } from 'types';

const patientAppointmentsSelector = (state: AppState) =>
	state.patientAppointments;

export const getAllPatientAppointmentsSelector = createSelector(
	patientAppointmentsSelector,
	data =>
		data?.appointments?.map(
			({
				doctor: { firstName, lastName, specializationName, photo },
				reason,
				visitDate,
			}) => ({
				firstName,
				lastName,
				specializationName,
				photo,
				reason,
				visitDate,
			})
		)
);
