import { createSlice, createAction } from '@reduxjs/toolkit';
import { CreateAppointmentType } from 'types';

const initialState: CreateAppointmentType = {
	specializations: [],
	doctors: [],
	reason: '',
	note: '',
	selectedDoctorID: '',
	availableAppointments: [],
	selectedAppointmentTime: '',
	appointmentConfirmationData: {
		id: '',
		patientId: '',
		doctorId: '',
		visitDate: '',
		reason: '',
		note: '',
		status: '',
	},
};

const createAppointmentSlice = createSlice({
	name: 'createAppointment',
	initialState,
	reducers: {
		setSpecializations: (state, { payload }) => {
			state.specializations = payload;
		},
		setDoctorsBySpecialtyID: (state, { payload }) => {
			state.doctors = payload;
		},
		setAvailableAppointments: (state, { payload }) => {
			state.availableAppointments = payload;
		},
		resetForm: state => {
			state.doctors = [];
			state.availableAppointments = [];
			state.selectedDoctorID = '';
			state.selectedAppointmentTime = '';
		},
	},
});

export const getSpecializations = createAction(
	'createAppointment/getSpecializations'
);

export const getDoctorsBySpecialtyID = createAction<string>(
	'createAppointment/getDoctorsBySpecialtyID'
);

export const getAvailableAppointments = createAction<{
	date: string;
	doctorID: string;
}>('createAppointment/getAvailableAppointments');

const { actions, reducer } = createAppointmentSlice;
export const {
	setSpecializations,
	setDoctorsBySpecialtyID,
	setAvailableAppointments,
	resetForm,
} = actions;
export { reducer as createAppointmentReducer };
