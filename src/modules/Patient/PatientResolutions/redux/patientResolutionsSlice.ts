import { createSlice } from '@reduxjs/toolkit';
import { PatientResolutions } from 'types';

const PatientResolutionsInitialState: PatientResolutions = {
	resolutions: [],
	total: 0,
};

const patientResolutionsSlice = createSlice({
	name: 'patientResolutions',
	initialState: PatientResolutionsInitialState,
	reducers: {
		getAllResolutions: () => {},
		setAllResolutions: (state, { payload }) => {
			state.resolutions = payload.resolutions;
		},
	},
});

const { actions, reducer } = patientResolutionsSlice;
export const { getAllResolutions, setAllResolutions } = actions;
export { reducer as patientResolutionsReducer };
