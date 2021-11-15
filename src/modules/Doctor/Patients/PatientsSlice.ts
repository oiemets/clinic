import { createSlice } from '@reduxjs/toolkit';

const patientsSlice = createSlice({
	name: 'patients',
	initialState: { patients: {} },
	reducers: {
		loadingStart() {},
		loadingSuccess(state, action) {
			state.patients = action.payload;
		},
	},
});

const { actions, reducer } = patientsSlice;
export const { loadingStart, loadingSuccess } = actions;
export { reducer as patientsReducer };
