import { RouteObject } from 'react-router-dom';
import { RequireAuth } from 'modules';
import {
	PatientsPage,
	PatientAppointmentsPage,
	PatientProfilePage,
	PatientResolutionsPage,
} from 'pages';

const Patient: RouteObject[] = [
	{
		path: 'appointments',
		element: (
			<RequireAuth>
				<PatientAppointmentsPage />
			</RequireAuth>
		),
	},
	{
		path: 'profile',
		element: (
			<RequireAuth>
				<PatientProfilePage />
			</RequireAuth>
		),
	},
	{
		path: 'resolutions',
		element: (
			<RequireAuth>
				<PatientResolutionsPage />
			</RequireAuth>
		),
	},
];

const Doctor: RouteObject[] = [
	{
		path: 'patients',
		element: (
			<RequireAuth>
				<PatientsPage />
			</RequireAuth>
		),
	},
];

export const privateRoutes: RouteObject[] = [...Doctor, ...Patient];
