import { createSlice, createAction } from '@reduxjs/toolkit';
import { CreateAppointmentType, CreateAppointmentValues } from 'types';
import { NavigateFunction } from 'react-router-dom';

const initialState: CreateAppointmentType = {
	specializations: [],
	doctors: [],
	availableAppointments: [],
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
		},
		setAppointmentConfirmationData: (state, { payload }) => {
			state.appointmentConfirmationData = payload;
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
	date: Date;
	doctorID: string;
}>('createAppointment/getAvailableAppointments');

export const submitCreateAppointmentForm = createAction<{
	values: CreateAppointmentValues;
	navigate: NavigateFunction;
}>('createAppointment/submitCreateAppointmentForm');

const { actions, reducer } = createAppointmentSlice;
export const {
	setSpecializations,
	setDoctorsBySpecialtyID,
	setAvailableAppointments,
	resetForm,
	setAppointmentConfirmationData,
} = actions;
export { reducer as createAppointmentReducer };
