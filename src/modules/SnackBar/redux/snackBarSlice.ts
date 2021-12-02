import { createSlice } from '@reduxjs/toolkit';

const snackBarInitialState = {
	type: '',
	message: '',
	key: '',
};

const snackBarSlice = createSlice({
	name: 'snackbar',
	initialState: snackBarInitialState,
	reducers: {
		addSnackBar: (state, { payload }) => {
			const key = payload.options && payload.options.key;
			return {
				...state,
				...payload,
				key: key || new Date().getTime() + Math.random(),
			};
		},
		showSuccessSnackBar: () => {},
		showErrorSnackBar: () => {},
	},
});

const { actions, reducer } = snackBarSlice;
export const { addSnackBar, showErrorSnackBar, showSuccessSnackBar } = actions;
export { reducer as snackBarReducer };
