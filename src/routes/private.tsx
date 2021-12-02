import { RouteObject, Navigate } from 'react-router-dom';
import {
	ROOT,
	APPOINTMENTS,
	PROFILE,
	RESOLUTIONS,
	PATIENTS,
} from './pageRoutes';
import {
	PatientsPage,
	PatientAppointmentsPage,
	PatientProfilePage,
	PatientResolutionsPage,
	UserPage,
	NotFoundPage,
} from 'pages';

export const patient: RouteObject[] = [
	{
		path: ROOT,
		element: <UserPage />,
		children: [
			{ index: true, element: <Navigate to={APPOINTMENTS} /> },
			{
				path: APPOINTMENTS,
				element: <PatientAppointmentsPage />,
			},
			{
				path: PROFILE,
				element: <PatientProfilePage />,
			},
			{
				path: RESOLUTIONS,
				element: <PatientResolutionsPage />,
			},
		],
	},
	{ path: '/*', element: <Navigate to={APPOINTMENTS} /> },
	{ path: '*', element: <NotFoundPage /> },
];

export const doctor: RouteObject[] = [
	{
		path: PATIENTS,
		element: <PatientsPage />,
	},
];
