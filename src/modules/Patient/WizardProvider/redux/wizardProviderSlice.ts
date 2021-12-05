import { createSlice } from '@reduxjs/toolkit';
import { WizardProvider } from 'types';

const wizardProviderInitialState: WizardProvider = {
	specializations: [],
	doctorsBySpecialty: [],
	reasonForTheVisit: '',
	note: '',
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
	},
});

const { actions, reducer } = wizardProviderSlice;
export const {
	getSpecializations,
	setSpecializations,
	getDoctorsBySpecialty,
	setDoctorsBySpecialty,
} = actions;
export { reducer as wizardProviderReducer };
