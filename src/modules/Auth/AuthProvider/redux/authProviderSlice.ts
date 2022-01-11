import { createSlice, createAction } from '@reduxjs/toolkit';
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
		setProfile: (state, { payload }) => ({
			...state,
			profile: payload,
			isAuthenticated: true,
		}),
		signOutRequest: (_, { payload }) => {
			payload.navigate('/');
			return authProviderInitialState;
		},
		removeAccessToken: state => {
			state.accessToken = '';
		},
		setRefreshedTokens: (state, { payload }) => ({
			...state,
			...payload,
		}),
	},
});

export const getProfile = createAction('auth/getProfile');
export const authenticate = createAction('auth/authenticate');
export const refreshTokens = createAction('auth/refreshTokens');

const { actions, reducer } = authProviderSlice;
export const {
	setAuth,
	signOutRequest,
	setProfile,
	removeAccessToken,
	setRefreshedTokens,
} = actions;
export { reducer as authProviderReducer };
