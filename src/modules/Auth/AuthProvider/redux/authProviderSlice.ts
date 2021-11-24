import { createSlice } from '@reduxjs/toolkit';
import { AuthProvider } from 'types';

const authProviderInitialState: AuthProvider = {
	isAuthenticated: false,
	access_token: '',
	refresh_token: '',
	profile: {
		id: '',
		first_name: '',
		last_name: '',
		photo: '',
		role_name: '',
	},
};

const authProviderSlice = createSlice({
	name: 'auth',
	initialState: authProviderInitialState,
	reducers: {
		setAuth: (state, { payload }) => ({
			...state,
			...payload,
		}),

		setProfile: (state, { payload }) => ({
			...state,
			profile: payload,
			isAuthenticated: true,
		}),

		signOutRequest: () => authProviderInitialState,
	},
});

const { actions, reducer } = authProviderSlice;
export const { setAuth, signOutRequest, setProfile } = actions;
export { reducer as authProviderReducer };
