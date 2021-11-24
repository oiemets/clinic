import { combineReducers } from 'redux';
import { patientsReducer, authReducers } from 'modules';

export const rootReducer = combineReducers({
	auth: authReducers,
	patients: patientsReducer,
});
