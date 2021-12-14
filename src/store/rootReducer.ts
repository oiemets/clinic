import { combineReducers } from 'redux';
import {
	patientsReducer,
	authReducers,
	snackBarReducer,
	wizardProviderReducer,
	patientAppointmentsReducer,
} from 'modules';

export const rootReducer = combineReducers({
	auth: authReducers,
	patients: patientsReducer,
	snackBar: snackBarReducer,
	wizardProvider: wizardProviderReducer,
	patientAppointments: patientAppointmentsReducer,
});
