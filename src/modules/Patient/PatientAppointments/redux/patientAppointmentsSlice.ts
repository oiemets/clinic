import { createSlice } from '@reduxjs/toolkit';
import { PatientAppointments } from 'types';

const patientAppointmentsInitialState: PatientAppointments = {
	appointments: [],
};

const patientAppointmentsSlice = createSlice({
	name: 'patientAppointments',
	initialState: patientAppointmentsInitialState,
	reducers: {
		getAllAppointments: () => {},
		setAllAppointments: (state, { payload }) => {
			state.appointments = payload.appointments;
		},
	},
});

const { actions, reducer } = patientAppointmentsSlice;
export const { getAllAppointments, setAllAppointments } = actions;
export { reducer as patientAppointmentsReducer };
