import { combineReducers } from 'redux';
import { patientsReducer, authReducers, snackBarReducer } from 'modules';

export const rootReducer = combineReducers({
	auth: authReducers,
	patients: patientsReducer,
	snackBar: snackBarReducer,
});
