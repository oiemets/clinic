import { createSlice } from '@reduxjs/toolkit';

const authProviderInitialState = {
	isAuthenticated: false,
};

const authProviderSlice = createSlice({
	name: 'auth',
	initialState: authProviderInitialState,
	reducers: {
		setAuth: (state, { payload }) => {
			state.isAuthenticated = payload.isAuthenticated;
		},
	},
});

const { actions, reducer } = authProviderSlice;
export const { setAuth } = actions;
export { reducer as authReducer };
