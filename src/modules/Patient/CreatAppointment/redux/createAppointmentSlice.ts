import { createSlice } from '@reduxjs/toolkit';
import { CreateAppointment } from 'types';

const createAppointmentInitialState: CreateAppointment = {
	specializations: [],
	doctorsBySpecialty: [],
	reasonForTheVisit: '',
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
	name: 'wizardProvider',
	initialState: createAppointmentInitialState,
	reducers: {
		getSpecializations: () => {},
		setSpecializations: (state, { payload }) => {
			state.specializations = payload;
		},
		getDoctorsBySpecialty: (state, { payload }) => {},
		setDoctorsBySpecialty: (state, { payload }) => {
			state.doctorsBySpecialty = payload;
		},
		setSelectedDoctorID: (state, { payload }) => {
			state.selectedDoctorID = payload;
		},
		getAvailableAppointments: (state, { payload }) => {},
		setAvailableAppointments: (state, { payload }) => {
			state.availableAppointments = payload;
		},
		setSelectedAppointmentTime: (state, { payload }) => {
			state.selectedAppointmentTime = payload;
		},
		resetFormValues: state => {
			state.selectedDoctorID = '';
			state.selectedAppointmentTime = '';
			state.doctorsBySpecialty = [];
			state.availableAppointments = [];
		},
		submitForm: (state, { payload }) => {},
		setAppointmentConfirmationData: (state, { payload }) => {
			state.appointmentConfirmationData = payload;
		},
	},
});

const { actions, reducer } = createAppointmentSlice;
export const {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialty,
	setDoctorsBySpecialty,
	setSelectedDoctorID,
	getAvailableAppointments,
	setAvailableAppointments,
	setSelectedAppointmentTime,
	resetFormValues,
	submitForm,
	setAppointmentConfirmationData,
} = actions;
export { reducer as createAppointmentReducer };
