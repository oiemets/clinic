import { createSlice } from '@reduxjs/toolkit';
import { WizardProvider } from 'types';

const wizardProviderInitialState: WizardProvider = {
	specializations: [],
	doctorsBySpecialty: [],
	reasonForTheVisit: '',
	note: '',
	selectedDoctorID: '',
	availableAppointments: [],
	selectedAppointmentTime: '',
};

const wizardProviderSlice = createSlice({
	name: 'wizardProvider',
	initialState: wizardProviderInitialState,
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
		resetWizardFormValues: state => {
			state.selectedDoctorID = '';
			state.selectedAppointmentTime = '';
			state.doctorsBySpecialty = [];
			state.availableAppointments = [];
		},
	},
});

const { actions, reducer } = wizardProviderSlice;
export const {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialty,
	setDoctorsBySpecialty,
	setSelectedDoctorID,
	getAvailableAppointments,
	setAvailableAppointments,
	setSelectedAppointmentTime,
	resetWizardFormValues,
} = actions;
export { reducer as wizardProviderReducer };
