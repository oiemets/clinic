import { createSlice } from '@reduxjs/toolkit';

const signInInitialState = {
	isFetching: false,
};

const signInSlice = createSlice({
	name: 'auth',
	initialState: signInInitialState,
	reducers: {
		signInRequest: (state, action) => {
			state.isFetching = true;
		},
		signInSuccess: state => {
			state.isFetching = false;
		},
		signInError: state => {
			state.isFetching = false;
		},
	},
});

const { actions, reducer } = signInSlice;
export const { signInRequest, signInSuccess, signInError } = actions;
export { reducer as signInReducer };
