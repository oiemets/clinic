import { AppAction } from '../types';
import { Patients } from '../../api';

export type PatientsLoadStart = AppAction<'PatientsLoadStart'>;
export type PatientsLoadSuccess = AppAction<'PatientsLoadSuccess', Patients>;

export const patientsLoadStart = (): PatientsLoadStart => ({
	type: 'PatientsLoadStart',
});

export const patientsLoadSuccess = (
	patients: Patients
): PatientsLoadSuccess => ({
	type: 'PatientsLoadSuccess',
	payload: patients,
});
