import { combineReducers } from 'redux';
import {
	patientsReducer,
	authReducers,
	snackBarReducer,
	wizardProviderReducer,
} from 'modules';

export const rootReducer = combineReducers({
	auth: authReducers,
	patients: patientsReducer,
	snackBar: snackBarReducer,
	wizardProvider: wizardProviderReducer,
});
