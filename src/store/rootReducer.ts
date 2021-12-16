import { combineReducers } from 'redux';
import {
	patientsReducer,
	authReducers,
	snackBarReducer,
	createAppointmentReducer,
	patientAppointmentsReducer,
	patientResolutionsReducer,
} from 'modules';

export const rootReducer = combineReducers({
	auth: authReducers,
	patients: patientsReducer,
	snackBar: snackBarReducer,
	createAppointment: createAppointmentReducer,
	patientAppointments: patientAppointmentsReducer,
	patientResolutions: patientResolutionsReducer,
});
