import { createSlice } from '@reduxjs/toolkit';
import { AuthProvider } from 'types';

const authProviderInitialState: AuthProvider = {
	isAuthenticated: false,
	accessToken: '',
	refreshToken: '',
	profile: {
		id: '',
		firstName: '',
		lastName: '',
		photo: '',
		roleName: '',
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

		getProfile: () => {},

		setProfile: (state, { payload }) => ({
			...state,
			profile: payload,
			isAuthenticated: true,
		}),

		signOutRequest: () => authProviderInitialState,
		authenticate: () => {},
		removeAccessToken: state => {
			state.accessToken = '';
		},
		refreshTokens: () => {},
		setRefreshedTokens: (state, { payload }) => ({
			...state,
			...payload,
		}),
	},
});

const { actions, reducer } = authProviderSlice;
export const {
	setAuth,
	signOutRequest,
	setProfile,
	authenticate,
	removeAccessToken,
	getProfile,
	setRefreshedTokens,
	refreshTokens,
} = actions;
export { reducer as authProviderReducer };
