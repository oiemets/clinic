import { createSlice, createAction } from '@reduxjs/toolkit';

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
	},
});

export const showSuccessSnackBar = createAction<{ message: string }>(
	'snackbar/showSuccessSnackBar'
);
export const showErrorSnackBar = createAction<{ message: string }>(
	'snackbar/showErrorSnackBar'
);

const { actions, reducer } = snackBarSlice;
export const { addSnackBar } = actions;
export { reducer as snackBarReducer };
